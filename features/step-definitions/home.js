import { Given, When, Then } from '@wdio/cucumber-framework';
import homePage from '../page-objects/home.page.js';
import menuPage from '../page-objects/menu.page.js';
import productsPage from '../page-objects/products.page.js';



Given('User is on the home page', async function() {
    await homePage.open();
});

Given('User has no products in the cart', async function() {
    await expect(homePage.emptyMessage).toHaveText("(empty)");
});

When('User selects {word} menu item', async function(title) {
    await menuPage.clickMenuItem(title);
});

When('User clicks the search box', async function() {
    await homePage.clickSearchBox.click();
});

When('User enters {word} into the search box', async function(text) {
    await homePage.clickSearchBox.setValue(text);
});

When('User clicks the search button', async function() {
    await homePage.clickSearchButton.click();
});

Then('User should see products related to {word}', async function(text) {
    expect(await productsPage.validateSearch(text)).toBe(true);
});