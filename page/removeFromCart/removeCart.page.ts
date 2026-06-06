import { Locator, Page, expect } from "@playwright/test"

export class RemoveCartPage {
    readonly cartItem: Locator
    readonly removeBackpack: Locator
    readonly removeBikeLight: Locator
    readonly removeBoltTShirt: Locator
    readonly shoppingCartLink: Locator


    constructor(public page: Page) {
        this.page = page;
        this.cartItem = page.locator('.cart_item');
        this.removeBackpack = page.locator('[data-test="remove-sauce-labs-backpack"]');
        this.removeBikeLight = page.locator('[data-test="remove-sauce-labs-bike-light"]');
        this.removeBoltTShirt = page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]');
        this.shoppingCartLink = page.locator('[data-test="shopping-cart-link"]');
    }

    async removeItemFromCart() {
        await this.shoppingCartLink.click();
        await this.removeBackpack.click();
        await this.removeBikeLight.click();
        await this.removeBoltTShirt.click();
        await expect(this.cartItem).toHaveCount(0);
    }
}