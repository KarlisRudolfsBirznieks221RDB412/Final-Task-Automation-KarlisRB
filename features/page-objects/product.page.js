import { Page } from './page.js';
import { browser } from '@wdio/globals';

class ProductPage extends Page {

    async clickColorOption(colorName) { 
        const colorOption = await $(`//a[@name="${colorName}"]`);
        await colorOption.click();
    }
    get inStockButton() { return $('#ul_layered_quantity_0 > li > label > a'); }
    get addToCartButton() { return $('//span[text()="Add to cart"]'); }
    get proceedToCheckout1() { return $('//a[contains(@title,"Proceed to checkout")]'); }
    get proceedToCheckout2() { return $('//span[text()="Proceed to checkout"]'); }
    get continueShopping() { return $('//span[contains(@title, "Continue shopping")]'); }
    get cartQuantity() { return $('.ajax_cart_quantity'); }
    get viewCart() { return $('#header > div:nth-child(3) > div > div > div:nth-child(3) > div > a'); }
    get removeButton() { return $('#header > div:nth-child(3) > div > div > div:nth-child(3) > div > div > div > div > dl > dt > span > a'); }
}

export default new ProductPage();