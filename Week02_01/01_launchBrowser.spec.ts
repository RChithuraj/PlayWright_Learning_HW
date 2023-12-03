import {chromium, test} from "@playwright/test"

    test.skip("To launch a browser",async()=>{

        const browser=await chromium.launch({headless:false, channel:"chrome"   })
        const browserContext=await browser.newContext();
        const page=await browserContext.newPage();
        const page1=await browserContext.newPage();
        await page.goto("https://login.salesforce.com/");
        await page1.goto("http://www.flipkart.com");
        await page.waitForTimeout(10000);
})

test.skip("To launch a browser",async()=>{

    const browser=await chromium.launch({headless:false, channel:"chrome"   })
    const browserContext=await browser.newContext();
    const page=await browserContext.newPage();
    await page.goto("https://leaftaps.com/");
    await page.waitForTimeout(10000);
   // await page.locator("#username").fill("Demosalesmanager");
    await page.fill("#username","Demosalesmanager")

})