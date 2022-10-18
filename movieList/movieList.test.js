const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:5500/movieList/index.html')
})

test("Can movies be searched", async () => {
    let search = await driver.findElement(By.xpath('//input'))
    await search.sendKeys("Morbius\n")
    await driver.sleep(2000)
})

test("Can movies be crossed off", async () => {
    await driver.findElement(By.xpath('//span')).click()
    await driver.sleep(2000)
})

test("Can movies be deleted", async () => {
    await driver.findElement(By.xpath('//li/button')).click()
    await driver.sleep(2000)
})


afterAll(async () => {
    await driver.quit()
})