const puppeteer = require('puppeteer');

describe('Login form', () => {
  test('Can submit login form', async () => {
    let browser = await puppeteer.launch({
      headless: false, // open the browser, so we can see the test execution
      devtools: true, // open the devtools
      slowMo: 50 // wait 50 milliseconds between actions
    });
    let page = await browser.newPage();

    page.emulate({
      viewport: {
        width: 500,
        height: 500
      },
      userAgent: ''
    });

    await page.goto('http://localhost:3000/');
    await page.waitForSelector('form');

    await page.type("input[name=username]", 'Carlos');
    await page.type("input[name=password]", 'carlos123');

    await page.click("button[type=submit]");

    await page.waitForSelector('#welcome');
    await page.screenshot({ path: 'example.png' });

    // get an element text
    const text = await page.$eval('#welcome', e => e.innerHTML);
    expect(text).toBe('Welcome Carlos');

    browser.close();
  }, 9000000);
});
