-- Path: resources/my-teleport-script/fxmanifest.lua

fx_version 'cerulean'
game 'gta5'

author 'lazpal'
description 'Enhanced teleport script with save location and location list UI for QBCore'
version '1.6.0'

server_script 'server/teleport.lua'
client_script 'client/teleport.lua'

ui_page 'html/index.html'

files {
    'html/index.html',
    'html/script.js',
    'html/style.css'
}
