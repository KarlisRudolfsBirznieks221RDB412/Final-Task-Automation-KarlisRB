import { Page } from './page.js';
import { browser } from '@wdio/globals';

class ProductsPage extends Page {
    get firstProductPhoto() { return $('.product-container .product_img_link'); }

    async validateSearch(productName) {
        const similarProducts = await $$(`//div[@class="right-block"]//a[contains(text(), "${productName}")]`);
        const allProducts = await $$(`//div[@class="right-block"]`);

        console.log(`Number of similar products: ${similarProducts.length}`);
        console.log(`Total products: ${allProducts.length}`);

        return similarProducts.length === allProducts.length;
    }
}

export default new ProductsPage();