import { Page } from './page.js';
import { browser } from '@wdio/globals';

class HomePage extends Page {

    async open() {
        await browser.navigateTo('http://www.automationpractice.pl/');
    }

    get emptyMessage() { return $('//span[contains(text(), "empty")]'); }
    get clickSearchBox() { return $('#search_query_top'); }
    get clickSearchButton() { return $('.button-search'); }
}

export default new HomePage();