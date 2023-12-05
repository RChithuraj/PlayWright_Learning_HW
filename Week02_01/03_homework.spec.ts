/*
Assignment - 1 (Login to Salesforce)

1) Open Salesforce Login Page https://login.salesforce.com
2) Enter the username
3) Enter the password
4) Click Login
5) Print the title and url


Assignment - 2 (Create a new Lead)

1) Open http://leaftaps.com/opentaps/control/main
2) Perform the following functions

    a) Login (Enter username, password, Click Login)
    b) Click CRM/SFA Link (Locator for Link: text='Text of the Link') 
       await page.locator("text=CRM/SFA').click();
    c) Click the Leads Link (See the Tab)
    d) Click Create Lead Link (See Left Menu)
    e) Enter the company name, first name and last name (use id and pur your own data)
    f) Click Create Lead Button 

*/


import {chromium, test} from "@playwright/test";
import { Console } from "console";
import { channel } from "diagnostics_channel";

test("Login to Salesforce",async()=>{
    test.setTimeout(120000);
    const browser=await chromium.launch({channel:"chrome",headless:false});
    const browserContext=await browser.newContext();
    const page=await browserContext.newPage();
    await page.goto("https://login.salesforce.com/");
    await page.waitForLoadState("load");
    await page.locator("#username").fill("c2rajr@gmail.com");
    await page.locator("#password").fill("Chithu@0123");
    await page.locator("#Login").click();
    page.waitForLoadState("load");
    const getTitle=await page.title();
    console.log(`The title of page is ${getTitle}`);
    const currentUrl=page.url();
    console.log(`Current page url is ${currentUrl}`);

})

test.only("Create a new Lead",async()=>{
    test.setTimeout(120000);
    const browser=await chromium.launch({channel:"msedge",headless:false})
    const browserContext=await browser.newContext();
    const page=await browserContext.newPage();
    page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator("#username").fill("Demosalesmanager");
    await page.locator("#password").fill("crmsfa");
    await page.locator(".decorativeSubmit").click();
    page.waitForLoadState("load");
    await page.locator(".crmsfa").click();
   page.waitForLoadState("load");
    await page.click("text=Leads");
    await page.locator("//a[text()='Create Lead']").click();
    await page.locator("input.inputBox[name='companyName']").fill("MyCompany");
    await page.locator("input.inputBox[name='firstName']").fill("MyFirstName");
    await page.locator("input.inputBox[name='lastName']").fill("MyLastName");
    await page.locator(".smallSubmit").click();
    await page.waitForLoadState("domcontentloaded")

})