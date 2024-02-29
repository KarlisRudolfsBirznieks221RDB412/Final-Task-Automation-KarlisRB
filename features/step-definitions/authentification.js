import { Given, When, Then } from '@wdio/cucumber-framework';
import OrderPage from '../page-objects/order.page.js';

Then('User should be prompted to {string}', async function(text) {
    await expect(OrderPage.accountPrompt).toHaveText(text);
});