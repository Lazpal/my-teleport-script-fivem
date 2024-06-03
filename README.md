# QBCore Teleport Script

## Περιγραφή

Αυτό το script παρέχει δυνατότητα τηλεμεταφοράς για παίκτες στο QBCore framework. Οι παίκτες μπορούν να χρησιμοποιήσουν το μενού για να επιλέξουν και να τηλεμεταφερθούν σε αποθηκευμένες τοποθεσίες.

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

git checkout -b feature/YourFeature
git commit -m 'Add some feature
git push origin feature/YourFeature


Άδεια Χρήσης
Αυτό το project είναι υπό την MIT Άδεια Χρήσης.
