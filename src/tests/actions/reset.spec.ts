import { test, expect } from '@playwright/test';
import { ChallengePage } from '../../page-objects/pages/Challenge';

test('Clicking reset clears any bars in the bowls', async ({ page }) => {
    const challengePage = new ChallengePage(page);
    await challengePage.goto();

    await challengePage.leftBowl.setInputsFromArray([1, 2]);
    await challengePage.rightBowl.setInputsFromArray([3, 4]);

    const leftBars = await challengePage.leftBowl.getInputtedBars();
    const rightBars = await challengePage.rightBowl.getInputtedBars();

    expect(leftBars).toEqual([1, 2]);
    expect(rightBars).toEqual([3, 4]);
});