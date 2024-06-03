// Path: resources/my-teleport-script/html/script.js
document.addEventListener('DOMContentLoaded', () => {
    const showLocationsButton = document.getElementById('showLocationsButton');
    const saveLocationButton = document.getElementById('saveLocationButton');
    const teleportButton = document.getElementById('teleportButton');
    const teleportSavedButton = document.getElementById('teleportSavedButton');
    const closeButton = document.getElementById('closeButton');
    const locationSelect = document.getElementById('locationSelect');
    const locationsList = document.getElementById('locationsList');
    const notification = document.getElementById('notification');
    const confirmation = document.getElementById('confirmation');
    const confirmTeleportButton = document.getElementById('confirmTeleportButton');
    const cancelTeleportButton = document.getElementById('cancelTeleportButton');

    let selectedCoords;

    showLocationsButton.addEventListener('click', () => {
        locationsList.classList.toggle('hidden');
        fetch(`https://${GetParentResourceName()}/getLocations`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({})
        }).then(resp => resp.json()).then(resp => {
            locationSelect.innerHTML = '';
            resp.locations.forEach(location => {
                const option = document.createElement('option');
                option.value = JSON.stringify(location.coords);
                option.textContent = location.name;
                locationSelect.appendChild(option);
            });
        });
    });

    saveLocationButton.addEventListener('click', () => {
        fetch(`https://${GetParentResourceName()}/save`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({})
        }).then(resp => resp.json()).then(resp => {
            console.log('Save response:', resp);
        });
    });

    teleportButton.addEventListener('click', () => {
        const selectedOption = locationSelect.options[locationSelect.selectedIndex];
        selectedCoords = JSON.parse(selectedOption.value);
        confirmation.classList.remove('hidden');
    });

    teleportSavedButton.addEventListener('click', () => {
        fetch(`https://${GetParentResourceName()}/teleport`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({})
        }).then(resp => resp.json()).then(resp => {
            console.log('Teleport response:', resp);
        });
    });

    confirmTeleportButton.addEventListener('click', () => {
        fetch(`https://${GetParentResourceName()}/teleport`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({ coords: selectedCoords })
        }).then(resp => resp.json()).then(resp => {
            console.log('Teleport response:', resp);
        });
        confirmation.classList.add('hidden');
    });

    cancelTeleportButton.addEventListener('click', () => {
        confirmation.classList.add('hidden');
    });

    closeButton.addEventListener('click', () => {
        fetch(`https://${GetParentResourceName()}/close`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({})
        }).then(resp => resp.json()).then(resp => {
            console.log('Close response:', resp);
        });
    });

    window.addEventListener('message', (event) => {
        if (event.data.action === 'openUI') {
            notification.classList.remove('hidden');
            locationSelect.innerHTML = '';
            event.data.locations.forEach(location => {
                const option = document.createElement('option');
                option.value = JSON.stringify(location.coords);
                option.textContent = location.name;
                locationSelect.appendChild(option);
            });
        } else if (event.data.action === 'closeUI') {
            notification.classList.add('hidden');
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
