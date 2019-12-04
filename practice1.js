const webdriver = require('selenium-webdriver')

const By =webdriver.By

async function scrape()
{
    const driver = new webdriver.Builder().forBrowser('chrome').build()

    await driver.get('file:///home/sunbeam/devops/selenium/app1/practice.html')

    const ele1 = driver.findElement(By.id('name'))
    console.log(ele1.getAttribute('value'))

    const ele2=driver.findElement(By.id('city'))
    console.log(ele2.getAttribute('value'))

    const ele3=driver.findElement(By.id('email'))
    console.log(ele3.getAttribute('value'))

    const ele4=driver.findElement(By.id('password'))
    console.log(ele4.getAttribute('value'))

    driver.close()
}
scrape()