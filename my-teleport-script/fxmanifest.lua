-- Path: resources/my-teleport-script/fxmanifest.lua

fx_version 'cerulean'
game 'gta5'
version '1.9.0'
author 'lazpal'
description 'Enhanced teleport script with save location and location list UI for QBCore'


fivem_checker 'yes'
github 'https://github.com/Lazpal/my-teleport-script-lazpal-fivem-qb'
version '1.9.0'
name '^my-teleport-script-lazpal'

server_script 'server/teleport.lua'
client_script 'client/teleport.lua'

ui_page 'html/index.html'

files {
    'html/index.html',
    'html/script.js',
    'html/style.css'
}