// Path: resources/my-teleport-script/html/script.js

document.addEventListener('DOMContentLoaded', () => {
    const showLocationsButton = document.getElementById('showLocationsButton');
    const saveLocationButton = document.getElementById('saveLocationButton');
    const teleportButton = document.getElementById('teleportButton');
    const deleteLocationButton = document.getElementById('deleteLocationButton');
    const searchLocationInput = document.getElementById('searchLocationInput');
    const closeButton = document.getElementById('closeButton');
    const locationSelect = document.getElementById('locationSelect');
    const locationName = document.getElementById('locationName');
    const locationsList = document.getElementById('locationsList');
    const notification = document.getElementById('notification');
    const menu = document.getElementById('menu');

    const showNotification = (message, success = true) => {
        notification.textContent = message;
        notification.style.backgroundColor = success ? '#4caf50' : '#f44336';
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.add('fade-out');
        }, 3000);
        setTimeout(() => {
            notification.classList.remove('show', 'fade-out');
        }, 3500);
    };

    const fetchAndUpdateLocations = () => {
        fetch(`https://${GetParentResourceName()}/getLocations`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({})
        }).then(resp => resp.text()).then(text => {
            try {
                const resp = JSON.parse(text);
                locationSelect.innerHTML = '';
                resp.locations.forEach(location => {
                    const option = document.createElement('option');
                    option.value = JSON.stringify(location.coords);
                    option.textContent = location.name;
                    locationSelect.appendChild(option);
                });
            } catch (error) {
                console.error('Error parsing locations:', error);
                showNotification('Error parsing locations!', false);
            }
        }).catch(error => {
            console.error('Error fetching locations:', error);
            showNotification('Error fetching locations!', false);
        });
    };

    showLocationsButton.addEventListener('click', () => {
        fetchAndUpdateLocations();
        locationsList.classList.toggle('hidden');
    });

    saveLocationButton.addEventListener('click', () => {
        const name = locationName.value;
        if (name) {
            fetch(`https://${GetParentResourceName()}/save`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify({ name })
            }).then(resp => resp.text()).then(text => {
                try {
                    const resp = JSON.parse(text);
                    console.log('Save response:', resp);
                    showNotification('Location saved successfully!');
                    fetchAndUpdateLocations();
                } catch (error) {
                    console.error('Error parsing save response:', error);
                    showNotification('Error saving location!', false);
                }
            }).catch(error => {
                console.error('Error saving location:', error);
                showNotification('Error saving location!', false);
            });
        } else {
            showNotification('Please enter a location name', false);
        }
    });

    teleportButton.addEventListener('click', () => {
        const selectedOption = locationSelect.options[locationSelect.selectedIndex];
        if (selectedOption) {
            const coords = JSON.parse(selectedOption.value);
            fetch(`https://${GetParentResourceName()}/teleport`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify({ coords })
            }).then(resp => resp.text()).then(text => {
                try {
                    const resp = JSON.parse(text);
                    console.log('Teleport response:', resp);
                    showNotification('Teleported successfully!');
                } catch (error) {
                    console.error('Error parsing teleport response:', error);
                    showNotification('Error teleporting!', false);
                }
            }).catch(error => {
                console.error('Error teleporting:', error);
                showNotification('Error teleporting!', false);
            });
        }
    });

    deleteLocationButton.addEventListener('click', () => {
        const selectedOption = locationSelect.options[locationSelect.selectedIndex];
        if (selectedOption) {
            const name = selectedOption.textContent;
            fetch(`https://${GetParentResourceName()}/deleteLocation`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify({ name })
            }).then(resp => resp.text()).then(text => {
                try {
                    const resp = JSON.parse(text);
                    console.log('Delete response:', resp);
                    showNotification('Location deleted successfully!');
                    fetchAndUpdateLocations();
                } catch (error) {
                    console.error('Error parsing delete response:', error);
                    showNotification('Error deleting location!', false);
                }
            }).catch(error => {
                console.error('Error deleting location:', error);
                showNotification('Error deleting location!', false);
            });
        }
    });

    searchLocationInput.addEventListener('input', () => {
        const filter = searchLocationInput.value.toLowerCase();
        Array.from(locationSelect.options).forEach(option => {
            const text = option.textContent.toLowerCase();
            option.style.display = text.includes(filter) ? '' : 'none';
        });
    });

    closeButton.addEventListener('click', () => {
        fetch(`https://${GetParentResourceName()}/close`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({})
        }).then(() => {
            menu.classList.remove('show');
            setTimeout(() => {
                menu.classList.add('hidden');
            }, 500); // Match the transition duration
        }).catch(error => {
            console.error('Error closing UI:', error);
        });
    });

    window.addEventListener('message', (event) => {
        if (event.data.action === 'openUI') {
            menu.classList.remove('hidden');
            setTimeout(() => {
                menu.classList.add('show');
            }, 10); // Allow time for the hidden class to be removed
        } else if (event.data.action === 'closeUI') {
            menu.classList.remove('show');
            setTimeout(() => {
                menu.classList.add('hidden');
            }, 500); // Match the transition duration
        } else if (event.data.action === 'updateLocations') {
            locationSelect.innerHTML = '';
            event.data.locations.forEach(location => {
                const option = document.createElement('option');
                option.value = JSON.stringify(location.coords);
                option.textContent = location.name;
                locationSelect.appendChild(option);
            });
        }
    });
});
