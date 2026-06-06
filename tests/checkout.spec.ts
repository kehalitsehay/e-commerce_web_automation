import {test, expect } from "@playwright/test"
import { CheckoutPage } from "../page/checkout/checkout.page"


test.describe("Checkout is functional and is working fine", async() => {

    test("Checkout full process ", async({page}) => {
        const checkoutPage = new CheckoutPage(page);
        await checkoutPage.navigateToHomePage();
        await checkoutPage.completeCheckoutProcess();
    });
});





// https://www.saucedemo.com/cart.html