import { test, expect } from '@playwright/test';
import { HomePage } from '../page/homePage/home.page';

test.describe('Homepage Tests', () => {

    test('should have the correct title', async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.navigateToHomePage();
        await homePage.verifyTitles();
    });
});