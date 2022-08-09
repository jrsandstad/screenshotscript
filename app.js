const fs                = require('fs');
const screenshot        = require('screenshot-desktop');
//const serverDir         = "C:\\Users\\jonas.sandstad\\Documents\\VentiShow-main\\VentiShow-main\\Filer";
const includeFile       = "/Users/jonas/Desktop/screenshotscript/Include.txt"; //Erstatt med Windows filepath
const lokasjoner        = "/Users/jonas/Desktop/screenshotscript/Lokasjoner";  //Erstatt med Windows filepath

screenshot({ filename: 'Test.jpg' });
screenshot({ filename: 'Test' + '2' + '.png'});
console.log("Screenshot taken.");