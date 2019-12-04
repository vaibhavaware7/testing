const webdriver = require("selenium-webdriver")

async function test1()
{
    const driver = new webdriver.Builder().forBrowser('chrome').build();

    await driver.get("https://google.com")

    const input = await driver.findElement(webdriver.By.name('q'))

    await input.sendKeys("selenium",webdriver.Key.ENTER)

    driver.close()
}

test1();