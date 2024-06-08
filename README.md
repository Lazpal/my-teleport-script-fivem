# QBCore Teleport Script

## Περιγραφή

Αυτό το script παρέχει δυνατότητα τηλεμεταφοράς για παίκτες στο QBCore framework. Οι παίκτες μπορούν να χρησιμοποιήσουν το μενού για να επιλέξουν και να τηλεμεταφερθούν σε αποθηκευμένες τοποθεσίες.

## preview
![Στιγμιότυπο οθόνης 2024-06-08 135646845134](https://github.com/Lazpal/my-teleport-script-lazpal-fivem-qb/assets/136169818/7ed8e253-3345-41f8-b1bc-de894c972db5)

![Στιγμιότυπο οθόνης 2024-06-08 135031](https://github.com/Lazpal/my-teleport-script-lazpal-fivem-qb/assets/136169818/874276b7-e90f-43e0-bd50-37f6d3ba24b7)


## Απαιτήσεις

- [QBCore Framework](https://github.com/qbcore-framework/qb-core)
- FiveM Server

## Εγκατάσταση

1. Κατεβάστε το script και τοποθετήστε το στον φάκελο `resources` του server σας.
2. Προσθέστε την ακόλουθη γραμμή στο αρχείο `server.cfg` για να ξεκινάει το script με το server:
   ```plaintext
   ensure my-teleport-script

## Χρήση
Για να ανοίξετε το μενού τηλεμεταφοράς, χρησιμοποιήστε την ακόλουθη εντολή στο παιχνίδι
/openmenu

## Δομή Αρχείων
my-teleport-script/
├── client.lua
├── server.lua
├── fxmanifest.lua
└── nui/
    └── index.html

## Άδεια Χρήσης
Αυτό το project είναι υπό την MIT Άδεια Χρήσης. 

##
author 'lazpal'
description 'Enhanced teleport script with save location and location list UI for QBCore'
version '1.6.0'
