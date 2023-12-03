
import {chromium, test} from "@playwright/test";
import { Console } from "console";
import { channel } from "diagnostics_channel";

test("Login to Salesforce",async()=>{
    test.setTimeout(120000);
    const browser=await chromium.launch({channel:"chrome",headless:false});
    const browserContext=await browser.newContext();
    const page=await browserContext.newPage();
    await page.goto("https://login.salesforce.com/");
    await page.waitForTimeout(15000);
    await page.locator("#username").fill("c2rajr@gmail.com");
    await page.locator("#password").fill("Chithu@0123");
    await page.locator("#Login").click();
    await page.waitForTimeout(40000);
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
    await page.waitForTimeout(10000);
    await page.locator(".crmsfa").click();
    await page.waitForTimeout(5000);
    await page.locator("//a[text()='Create Lead']").click();
    await page.locator("input.inputBox[name='companyName']").fill("MyCompany");
    await page.locator("input.inputBox[name='firstName']").fill("MyFirstName");
    await page.locator("input.inputBox[name='lastName']").fill("MyLastName");
    await page.locator(".smallSubmit").click();
    await page.waitForTimeout(15000);

})