import { test } from '@playwright/test';
import { ChallengePage } from '../page-objects/pages/Challenge';

test('Happy Path', async ({ page }) => {
    const challengePage = new ChallengePage(page);
    await challengePage.goto();

    await challengePage.buttons.clickWeighButton();
    await challengePage.buttons.clickWeighButton();
    console.log(await challengePage.gameInfo.getMostRecentWeighing())
    console.log(await challengePage.gameInfo.getAllWeighings())
  });
  