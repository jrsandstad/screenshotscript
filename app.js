//Dependencies
const { TIMEOUT } = require('dns');
const fs                = require('fs'); //Do not change this! Needed for the script to run.
const screenshot        = require('screenshot-desktop'); //Do not change this! Needed for the script to run.

//File handling
const locations         = ".\\locations.txt"; //Filepath for list of folders to copy to
const folderPath        = "C:\\Users\\jonas.sandstad\\Documents\\ScreenshotScript\\Lokasjoner\\"; //Base filepath for location to copy the screenshot to
const imageName         = "Zoho.png"; //Filename for the created image
var fileCounter         = 0;
var test                = ["Bergen", "Oslo", "Trondheim"];

//Time management
const minute            = 60000; //60000 ms = 1 minute
const wait              = 5; //Update this to set how many minutes the script will wait before running the function again. Currently 5 minutes.


//This function takes a screenshot and names it the same as the imageName constant
//Then it calls the copyImage function with a  5s delay in order for it to actuallly copy the new screenshot
function takeScreenshot(){ //Takes a screenshot and saves it in the project directory as "Test.png"
    screenshot({filename: imageName});
    console.log("Screenshot taken.");
    setTimeout(copyImage, 5000); //NOTE: change from setInterval to not create a 
}


//This function reads the locations.txt file into an array
//For each element in the array, copy the file Zoho.png to the destination
//defined by the folderPath, the element, and the imageName.
//If an error occurs, print error. This will stop the script.
//An error can occur if the element read doesnt correspond with the name of a folder in the folderPath location
function copyImage(){
    const folders = fs.readFileSync(locations).toString().split(/\r?\n/);

    folders.forEach(a => {
        fs.copyFile('.\\Zoho.png', folderPath + a + "\\" + imageName, (err) => {
            if (err) {
              console.log("Error Found:", err);
            }
        });
    });
    setTimeout(deleteImage(folders), 60000);
}

//Function to delete images taken before the new image is copied to the folder
//in order to be compatible with the other script
//Does not work atm. Issues with the callback function.
function deleteImage(folders){
    folders.forEach(a => {
        fs.unlinkSync(folderPath + a + "\\" + imageName);
    });
}

takeScreenshot();

//setInterval(takeScreenshot, wait*minute); //Runs the takeScreenshot function every x ms where x is the result of multiplication of the wait and minute constants.