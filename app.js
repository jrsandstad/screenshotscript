const fs                = require('fs');
const screenshot        = require('screenshot-desktop');
const includeFile       = "/Users/jonas/Desktop/screenshotscript/Include.txt"; //Erstatt med Windows filepath
const locations         = "/Users/jonas/Desktop/screenshotscript/Lokasjoner";  //Erstatt med Windows filepath
const wait              = 5; //Waiting time before script runs again


function takeScreenshot(){
    screenshot({filename: 'Test.png'});
    console.log("Screenshot taken.");
}

setInterval(takeScreenshot, 30000);