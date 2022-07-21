// WARNING: use only temporary emailID through https://temp-mail.org/en/

// browser control
// controls a headless browser -> browser that is by default not visible 
// npm i puppeteer
const puppeteer = require("puppeteer");
const credObj = require('./cred');
// module exports = {
// email: "",
// password: ""
// } 
// nearly every function of puppeteer returns a promise
async function fn() {
    const browserRepresentativeObj = await puppeteer.launch({
        headless: false,
        // executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",   //if we comment it program will run in chromium browser
        defaultViewport: null,   // to open browser in full screen and white space left by browser by default is now not left.
        args: ["--start-maximized" , "--start-in-incognito"],   // start browser in maimized mode.
        slowmo : 100 // in ms  // to add a delay to program
    });
    // new  tab open  
    const tab = await browserRepresentativeObj.newPage();
    // to go google's home page 
    await tab.goto("https://www.hackerrank.com/auth/login");
    // type 
    await tab.type("input[type='text']", credObj.email, { delay: 200 });
    await tab.keyboard.press("Tab");
    await tab.type("input[type='password']", credObj.password, { delay: 200 });
    // /to press a specific key
    await tab.keyboard.press("Enter");
    // page change error prevent -> to wait for selector i.e is present on the second page
    await tab.waitForSelector(".LC20lb.MBeuO.DKV0Md", { visible: true })
    // click on link 
    await tab.click(".LC20lb.MBeuO.DKV0Md", { delay: 200 });

    // 2nd part of project: -
    // choose a topic -> Java
    // select questions -> Java Stdin and Stdout I
    // write the code -> code read type
    // submit the code - > button click
    
    

}
fn();


// keyboard ,mouse ,scroll

