import { Page } from './page.js';
import { browser } from '@wdio/globals';

class MenuPage extends Page {

    async clickMenuItem(menuTitle) { 
        const menuItem = await $(`//a[text()="${menuTitle}"]`);
        await menuItem.click();
    }
}

export default new MenuPage();