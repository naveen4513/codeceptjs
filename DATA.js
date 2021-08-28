const { I, registerPage } = inject();

module.exports = {
    fields: {
        username: 'username_login',
        password: 'password_login'
    },
    navigationBar:{
        contractListing:'#list_node_2',
        mainNavigationBar: '//body/div[@id=\'wrapper\']/div[@id=\'quick_links\']/div[@id=\'buttons\']/div[3]/div[1]/div[1]',
        contractPanel: '//body/div[@id=\'wrapper\']/div[@id=\'quick_links\']/div[@id=\'buttons\']/div[3]/div[1]/div[1]/ul[2]/li[2]/a[1]/span[1]',
        autoExtractionListing: '#list_node_432',
    },
    button: {
        uploadButton: 'Upload Documen',
        submitButton: {css: '#loginButton'},
    },

        url: 'https://testwu.sirioninc.net',
        username: 'karuna_user',
        password: 'admin123',


    // introducing methods
    loginPage(username, password) {
        I.fillField(this.fields.username, current);
        I.fillField(this.fields.password, password);
        I.click(this.buttons.submitButton);
        pause();
        I.waitForElement(this.navigationBar.mainNavigationBar,20);
        I.moveCursorTo(this.navigationBar.mainNavigationBar);
        I.click(this.navigationBar.contractPanel);
        I.click(this.navigationBar.autoExtractionListing);
        I.click(this.buttons.uploadButton);
        I.fillField('#jx-propProject','10JUNEMAP')
        I.click('#ui-id-20');
        I.click('//span[contains(text(),\'Next\')]');
        I.waitForElement('//body/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/label[1]',10);
        I.attachFile('input[type="file"]','KAMADALTD_DRSADraftR_3252013.docx');
        I.click('Done');

    },

}