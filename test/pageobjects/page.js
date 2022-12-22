/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a page of the page
    */
    open () {
        return browser.url(`https://elenastepuro.github.io/test_env/index.html`)
    }
}
