import { test } from '@playwright/test';
import { ChallengePage } from '../page-objects/pages/Challenge';

test('Happy Path', async ({ page }) => {
    const challengePage = new ChallengePage(page);
    await challengePage.goto();

    await challengePage.leftBowl.setInputsFromArray([1, 2]);
    await challengePage.rightBowl.setInputsFromArray([3, 4]);
    await challengePage.buttons.clickWeighButton();
    console.log(await challengePage.gameInfo.getMostRecentWeighing())
    console.log(await challengePage.gameInfo.getAllWeighings())
  });
  