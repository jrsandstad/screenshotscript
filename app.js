const fs                = require('fs');
const screenshot        = require('screenshot-desktop');
const locations         = "locations.txt";  //Erstatt med Windows filepath
const wait              = 5; //Update this to set how many minutes the script will wait before running the function again. Currently 5 minutes.
const minute            = 6000; //6 seconds in ms. Update to 1 minute = 60000 ms in final version
var folders             = []; //Stores names of folders to place the screenshot in after locations.txt have been read.


function takeScreenshot(){ //Takes a screenshot and saves it in the project directory as "Test.png"
    screenshot({filename: 'Test.png'});
    console.log("Screenshot taken.");
}
const array = fs.readFileSync(locations).toString().split("\n");
for (const a of array) {
  console.log(a);
}

console.log(array);

//setInterval(takeScreenshot, wait*minute); //Runs the takeScreenshot function every x ms where x is the result of multiplication of the wait and minute constants.