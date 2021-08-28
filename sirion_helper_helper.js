const Helper = require('@codeceptjs/helper');

class Sirion_helper extends Helper {


    // add custom methods here
  // If you need to access other helpers
  // use: this.helpers['helperName']
  async goTo(url) {
    const {Playwright} = this.helpers;
    await Playwright.amOnPage(url);
  }
  async fill(fieldXpath, fieldValue) {
    const {Playwright} = this.helpers;
    await Playwright.fillField(fieldXpath, fieldValue);
  }
  async press(key) {
    const {Playwright} = this.helpers;
    await Playwright.pressKey(key);
  }
  async getText(key) {
    const {Playwright} = this.helpers;
    await Playwright.grabTextFrom(key)
  }
  async see(text,xpath) {
    const {Playwright} = this.helpers;
    await Playwright.see(text,xpath)
  }


  doAwesomeThings() {
    console.log('Hello This is Naveen');
  }

}

module.exports = Sirion_helper;
