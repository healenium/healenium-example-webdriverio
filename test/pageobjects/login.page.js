

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {

    get inputName () {
        return $('//*[@id="change:name"]');
    }

    get btnSubmit () {
        return $('//*[@id="Submit"]');
    }

    /**
     * a method to find element on the page, 
     * then generate new id for it and find element agein
     */
    async fillForm () {
        await this.inputName;
        await this.btnSubmit.click();
        await this.inputName; // healing
    }

}

export default new LoginPage();
