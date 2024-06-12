# QBCore Teleport Script

## Περιγραφή

Αυτό το script παρέχει δυνατότητα τηλεμεταφοράς για παίκτες στο QBCore framework. Οι παίκτες μπορούν να χρησιμοποιήσουν το μενού για να επιλέξουν και να τηλεμεταφερθούν σε αποθηκευμένες τοποθεσίες.

## preview

![Στιγμιότυπο οθόνης 2024-06-10 164446](https://github.com/Lazpal/my-teleport-script-lazpal-fivem-qb/assets/136169818/5b58aca8-7a08-4d93-bdb9-1074abdfb832)

![Στιγμιότυπο οθόνης 2024-06-10 164539](https://github.com/Lazpal/my-teleport-script-lazpal-fivem-qb/assets/136169818/5f7a96c2-0906-4b7e-881f-430def1e95fc)

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
      └── script.js
      └── style.css
      
      

## Άδεια Χρήσης
Αυτό το project είναι υπό την MIT Άδεια Χρήσης. 

##
author 'lazpal'
description 'Enhanced teleport script with save location and location list UI for QBCore'
version '1.8.9'
