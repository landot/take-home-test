import { test, expect } from '@playwright/test';
import { ChallengePage } from '../../pageObjects/pages/challenge';

test('Clicking reset clears any bars in the bowls', async ({ page }) => {
    const challengePage = new ChallengePage(page);
    await challengePage.goto();

    await challengePage.leftBowl.setInputsFromArray([1, 2]);
    await challengePage.rightBowl.setInputsFromArray([3, 4]);

    await challengePage.buttons.clickResetButton();

    const leftBars = await challengePage.leftBowl.getInputtedBars();
    const rightBars = await challengePage.rightBowl.getInputtedBars();

    expect(leftBars).toEqual([]);
    expect(rightBars).toEqual([]);
});