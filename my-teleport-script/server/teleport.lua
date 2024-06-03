-- Path: resources/my-teleport-script/server/teleport.lua

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
    if coords then
        TriggerClientEvent('my-teleport-script:teleport', src, coords)
    else
        if savedCoords[src] then
            TriggerClientEvent('my-teleport-script:teleport', src, savedCoords[src])
        else
            TriggerClientEvent('QBCore:Notify', src, "No saved location found.", "error")
        end
    end
end)

RegisterNetEvent('my-teleport-script:saveCoords')
AddEventHandler('my-teleport-script:saveCoords', function()
    local src = source
    local playerPed = GetPlayerPed(src)
    local coords = GetEntityCoords(playerPed)
    savedCoords[src] = coords
    TriggerClientEvent('QBCore:Notify', src, "Location saved!", "success")
end)

RegisterNetEvent('my-teleport-script:getLocations')
AddEventHandler('my-teleport-script:getLocations', function()
    local src = source
    TriggerClientEvent('my-teleport-script:returnLocations', src, locations)
end)
