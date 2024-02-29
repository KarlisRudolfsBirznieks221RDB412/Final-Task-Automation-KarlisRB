import { Page } from './page.js';
import { browser } from '@wdio/globals';

class OrderPage extends Page {
    get accountPrompt() { return $('//h3[text()="Create an account"]'); }
}

export default new OrderPage();