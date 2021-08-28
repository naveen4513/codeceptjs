var data1 = require('./dataSet1')();

Feature('My First Test');

Data(data1.accounts).Scenario('test something',  async ({ I,PageObjects, current}) => {


  I.amOnPage('http://qavf.ca.office');

  // PageObjects.loginPage('karuna_user', 'admin123');

  I.fillField(PageObjects.fields.username,current.login);
  I.fillField(PageObjects.fields.password, current.pass);
  I.click(PageObjects.button.submitButton);
  I.waitForElement(PageObjects.navigationBar.mainNavigationBar,20);
  I.moveCursorTo(PageObjects.navigationBar.mainNavigationBar);
  I.click(PageObjects.navigationBar.contractPanel);
  I.click(PageObjects.navigationBar.autoExtractionListing);
  I.click(PageObjects.button.uploadButton);
  I.fillField('#jx-propProject','10JUNEMAP')
  I.click('#ui-id-20');
  I.click('//span[contains(text(),\'Next\')]');
  I.waitForElement('//body/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/label[1]',10);
  I.attachFile('input[type="file"]','KAMADALTD_DRSADraftR_3252013.docx');
  I.click('Done');
  console.log(current.login);
});

Data(data1.accounts).Scenario('Sirion',  async ({ I,PageObjects, current}) => {





  I.amOnPage('http://qavf.ca.office');

  // PageObjects.loginPage('karuna_user', 'admin123');

  I.fillField(PageObjects.fields.username,current.login);
  I.fillField(PageObjects.fields.password, current.pass);
  I.click(PageObjects.button.submitButton);
  I.waitForElement(PageObjects.navigationBar.mainNavigationBar,20);
  I.moveCursorTo(PageObjects.navigationBar.mainNavigationBar);
  I.click(PageObjects.navigationBar.contractPanel);
  I.click(PageObjects.navigationBar.autoExtractionListing);
  I.click(PageObjects.button.uploadButton);
  I.fillField('#jx-propProject','10JUNEMAP')
  I.click('#ui-id-20');
  I.click('//span[contains(text(),\'Next\')]');
  I.waitForElement('//body/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/label[1]',10);
  I.attachFile('input[type="file"]','KAMADALTD_DRSADraftR_3252013.docx');
  I.click('Done');
  console.log(current.login);
});
