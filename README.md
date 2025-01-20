# QBCore Teleport Script

## Περιγραφή

Αυτό το script παρέχει δυνατότητα τηλεμεταφοράς για παίκτες στο QBCore framework. Οι παίκτες μπορούν να χρησιμοποιήσουν το μενού για να επιλέξουν και να τηλεμεταφερθούν σε αποθηκευμένες τοποθεσίες.
(1.9.0)This is an enhanced teleport script for QBCore with animations and improved UI. It allows players to save, delete, and teleport to locations within the game.
© 2025 LAZPAL

## Features

- Save and delete locations
- Teleport to saved locations
- Improved UI with animations
- Notification system
  
## preview

![Στιγμιότυπο οθόνης 2024-06-10 164446](https://github.com/Lazpal/my-teleport-script-lazpal-fivem-qb/assets/136169818/5b58aca8-7a08-4d93-bdb9-1074abdfb832)

![Στιγμιότυπο οθόνης 2024-06-10 164539](https://github.com/Lazpal/my-teleport-script-lazpal-fivem-qb/assets/136169818/5f7a96c2-0906-4b7e-881f-430def1e95fc)

## Απαιτήσεις

- [QBCore Framework](https://github.com/qbcore-framework/qb-core)
- FiveM Server

## Installation

1. Clone the repository or download the ZIP file.
2. Place the `my-teleport-script` folder in your `resources` directory.
3. Add `ensure my-teleport-script` to your `server.cfg`.

## Usage

- Use the `/openui` command (requires permission `command.teleportme`) to open the teleport menu.
- Save your current location, search for saved locations, and teleport to them using the menu.

## Δομή Αρχείων
my-teleport-script/
   ├── client.lua
   ├── server.lua
   ├── fxmanifest.lua
   └── nui/
      └── index.html
      └── script.js
      └── style.css
      
      

## License

This project is licensed under the LAZPAL License - see the [LICENSE](LICENSE) file for details.
----
© 2025 LAZPAL
----
##
author 'lazpal'
description 'Enhanced teleport script with save location and location list UI for QBCore'
version '1.8.9'
