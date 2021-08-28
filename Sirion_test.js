var data1 = require('./dataSet1')();
let FooterText;
let appver;
Feature('Sirion URL Test');

Data(data1.accounts).Scenario('Sirion Login & Version Check',   async({ I,DATA}) => {

    I.clearCookie();
    I.goTo(DATA.url);
    I.fill("Sirion ID", DATA.username)
    I.fill("Password", DATA.password)
    I.press("Enter")
    //Check application version

    if (I.see('Version', '//body/div[@id=\'footer\']/span[1]')) {
        FooterText = await I.grabTextFrom('//body/div[@id=\'footer\']/span[1]');
        appver = String(FooterText).substring(70,78);
        console.log(appver);
    } else {
        FooterText = I.getText('//body/div[@id=\'footer\']/span[1]');
        console.log('Demo Text');
    }


    await I.executeScript(function () {
        var terms = document.getElementById("acceptTerms");
        if (terms == null) {
            return "No terms of usage pop-up";
        } else {
            return document.getElementById("acceptTerms").click() || document.getElementById("postTermsUsage").click();
        }
        if (I.see("Welcome to UX 2.0!")) {
            I.click("Close")
        }
    });
});


