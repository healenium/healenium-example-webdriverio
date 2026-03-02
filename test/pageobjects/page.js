/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a page of the page
    */
    open () {
        return browser.url(`https://healenium.github.io/healenium-test-env/index.html`)
    }
}
