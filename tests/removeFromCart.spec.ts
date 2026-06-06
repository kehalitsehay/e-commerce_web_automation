import { test, expect } from "@playwright/test";
import { AddToCartPage } from "../page/addToCart/addtoCart.page";
import { RemoveCartPage } from "../page/removeFromCart/removeCart.page";    

test.describe('Remove from Cart Functionality', () => {

    test('Add and remove items from the cart', async ({ page }) => {
        const addToCartPage = new AddToCartPage(page);
        await addToCartPage.navigateToHomePage();
        await addToCartPage.addItemsToCart();
        
        const removeFromCartPage = new RemoveCartPage(page);
        await removeFromCartPage.removeItemFromCart();
    });
});
