import { test, expect, Dialog } from '@playwright/test';
import { ChallengePage } from '../../page-objects/pages/Challenge';

test('Clicking a coin opens a popup', async ({ page }) => {
    const challengePage = new ChallengePage(page);
    let dialogMessage = '';

    // Setup event listener for the dialog
    page.on('dialog', async (dialog: Dialog) => {
        dialogMessage = dialog.message();
        await dialog.dismiss();
    });

    await challengePage.goto();
    await challengePage.coins.clickCoinWithValue(1);

    // only assert that the popup exists and not the inner text
    // the e2e test will verify functionality of selecting the correct and incorrect answer
    expect(dialogMessage).not.toEqual('');

});