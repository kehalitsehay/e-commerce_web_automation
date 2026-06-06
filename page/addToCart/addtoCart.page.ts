import { Locator, Page, expect } from "@playwright/test"

export class AddToCartPage {
    readonly addToCartBackpack: Locator
    readonly addToCartBikeLight: Locator
    readonly addToCartBoltTShirt: Locator
    readonly shoppingCartLink: Locator

    constructor(public page: Page) {
        this.page = page;
        this.addToCartBackpack = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.addToCartBikeLight = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
        this.addToCartBoltTShirt = page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
        this.shoppingCartLink = page.locator('.shopping_cart_link');
    }

    async navigateToHomePage() {
        await this.page.goto('https://www.saucedemo.com/inventory.html', { timeout: 60000 });
    }

    async addItemsToCart() {
        await this.addToCartBackpack.click();
        await this.addToCartBikeLight.click();
        await this.addToCartBoltTShirt.click();
        await this.shoppingCartLink.click();
        await expect(this.page.locator('.cart_item')).toHaveCount(3);
    }
}
