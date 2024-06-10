local QBCore = exports['qb-core']:GetCoreObject()
local savedCoords = {}
local locations = {
    { name = "Police Station", coords = vector3(425.1, -979.5, 30.7) },
    { name = "Hospital", coords = vector3(357.4, -593.4, 28.8) },
    { name = "Airport", coords = vector3(-1037.7, -2737.8, 20.1) },
    -- Add more locations here
}

RegisterCommand('openui', function(source)
    local src = source
    if IsPlayerAceAllowed(src, "command.teleportme") then
        TriggerClientEvent('my-teleport-script:openUI', src, locations)
    end
end, false)

RegisterNetEvent('my-teleport-script:teleportMe')
AddEventHandler('my-teleport-script:teleportMe', function(coords)
    local src = source
    TriggerClientEvent('my-teleport-script:teleport', src, coords)
end)

RegisterNetEvent('my-teleport-script:saveCoords')
AddEventHandler('my-teleport-script:saveCoords', function(name)
    local src = source
    local playerPed = GetPlayerPed(src)
    local coords = GetEntityCoords(playerPed)
    table.insert(locations, { name = name, coords = coords })
    TriggerClientEvent('QBCore:Notify', src, "Location saved!", "success")
    TriggerClientEvent('my-teleport-script:returnLocations', src, locations)
end)

RegisterNetEvent('my-teleport-script:deleteLocation')
AddEventHandler('my-teleport-script:deleteLocation', function(name)
    local src = source
    for i, location in ipairs(locations) do
        if location.name == name then
            table.remove(locations, i)
            TriggerClientEvent('QBCore:Notify', src, "Location deleted!", "success")
            break
        end
    end
    TriggerClientEvent('my-teleport-script:returnLocations', src, locations)
end)

RegisterNetEvent('my-teleport-script:getLocations')
AddEventHandler('my-teleport-script:getLocations', function()
    local src = source
    TriggerClientEvent('my-teleport-script:returnLocations', src, locations)
end)
