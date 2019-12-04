const webdriver = require("selenium-webdriver")

const By = webdriver.By

async function test()
{
    const driver = new webdriver.Builder().forBrowser('chrome').build()

    await driver.get('file:///home/sunbeam/devops/selenium/app1/democal.html')

    const value1=driver.findElement(By.id('value1'))
    value1.sendKeys('200')

    const value2=driver.findElement(By.id('value2'))
    value2.sendKeys('300')

    const btn =driver.findElement(By.id('calculate'))
    btn.click()

    const expected = 500

    const actual = await driver.findElement(By.id('result')).getAttribute('value')
    console.log(`Expected:${expected}, Actual:${actual}`)

    if(expected==actual)
    {
        console.log("addtion is working fine")
   
    }
     else
      {
        console.log("addtion is not working fine")
     
      }
      driver.close()
        
}

test()