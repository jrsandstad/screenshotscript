var   express           = require('express');
const fs                = require('fs');
const screenshot        = require('screenshot-desktop');
const serverDir         = "C:\\Users\\jonas.sandstad\\Documents\\VentiShow-main\\VentiShow-main\\Filer";
const includeFile       = "C:\Users\jonas.sandstad\Documents\ScreenshotScript\Include.txt";

screenshot({ filename: 'C:\\Users\\jonas.sandstad\\Documents\\ScreenshotScript\\Test.jpg' });
screenshot({ filename: 'C:\\Users\\jonas.sandstad\\Documents\\ScreenshotScript\\Test' + '2' + '.png'});
console.log("Dette er en test!");