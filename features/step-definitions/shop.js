import { Given, When, Then } from '@wdio/cucumber-framework';
import productsPage from '../page-objects/products.page.js';
import productPage from '../page-objects/product.page.js';
import homePage from '../page-objects/home.page.js';


When('User clicks on In stock', async function() {
    await (await productPage.inStockButton).click();
  });

When('User clicks on a product', async function() {
    await productsPage.firstProductPhoto.click();
});

When('User selects a {word} color', async function(color) {
    await productPage.clickColorOption(color);
});

When('User clicks the Add to Card button', async function() {
    await productPage.addToCartButton.click();
});

When('User clicks the Proceed to checkout button', async function() {
    await productPage.proceedToCheckout1.waitForClickable();
    await productPage.proceedToCheckout1.click();
    await productPage.proceedToCheckout2.click();
});

When('User clicks the Continue shopping button', async function() {
    await productPage.continueShopping.waitForClickable();
    await productPage.continueShopping.click();
});

When('User clicks remove button on cart', async function() {
    await productPage.viewCart.moveTo();
    await browser.pause(2000);
    await productPage.viewCart.moveTo();
    await productPage.removeButton.click();
    await browser.pause(2000);
});

Then('Counter of the cart should increase by 1', async function() {
    await expect(productPage.cartQuantity).toHaveText("1");
});

Then('Counter of the cart should be empty', async function() {
    await expect(homePage.emptyMessage).toHaveText("(empty)");
});