import {Page, Locator, expect } from "@playwright/test"

export class HomePage {
    readonly title1: Locator
    readonly title2: Locator
    readonly title3: Locator
    

    constructor(public page: Page) {
        this.page = page;
        this.title1 = page.locator('[data-test="item-4-title-link"]')
        this.title2 = page.locator('[data-test="item-5-title-link"]')
        this.title3 = page.locator('[data-test="item-6-title-link"]')
    }

    async navigateToHomePage() {
        await this.page.goto('https://www.saucedemo.com/inventory.html', { timeout: 60000 });
    }

    async verifyTitles() {
        await expect(this.title1).toContainText('Sauce Labs Backpack');
        await expect(this.title2).toContainText('Sauce Labs Fleece Jacket');
    }
}