import {test, expect } from "@playwright/test"
import { AddToCartPage } from "../page/addToCart/addtoCart.page"   

test.describe('Add to Cart Functionality', () => {

    test('should add items to the cart', async ({ page }) => {
        const addToCartPage = new AddToCartPage(page);
        await addToCartPage.navigateToHomePage();
        await addToCartPage.addItemsToCart();
    });
});


// now all issue are resolved and test is running successfully. 

// new branch is created for pull request and code is pushed to remote repository.