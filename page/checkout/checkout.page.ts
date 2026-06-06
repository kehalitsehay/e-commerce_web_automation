import { Locator, Page, expect } from "@playwright/test"

export class CheckoutPage {
    readonly shopingCartLink: Locator
    readonly checkoutButton: Locator
    readonly firstNameInput: Locator
    readonly lastNameInput: Locator
    readonly postalCodeInput: Locator
    readonly continueButton: Locator
    readonly finishButton: Locator


    constructor(public page: Page) {
        this.page = page;
        this.shopingCartLink = page.locator('.shopping_cart_link');
        this.checkoutButton = page.locator('[data-test="checkout"]');
        this.firstNameInput = page.locator('[data-test="firstName"]');
        this.lastNameInput = page.locator('[data-test="lastName"]');
        this.postalCodeInput = page.locator('[data-test="postalCode"]');
        this.continueButton = page.locator('[data-test="continue"]');
        this.finishButton = page.locator('[data-test="finish"]');
    }

    async navigateToHomePage() {
        await this.page.goto('https://www.saucedemo.com/cart.html', { timeout: 60000 });
    }

    async completeCheckoutProcess() {
        await this.shopingCartLink.click();
        await this.checkoutButton.click();
        await this.firstNameInput.fill('John');
        await this.lastNameInput.fill('Doe');
        await this.postalCodeInput.fill('12345');
        await this.continueButton.click();
        await this.finishButton.click();
        await expect(this.page.locator('.complete-header')).toHaveText('Thank you for your order!');
    }
}

