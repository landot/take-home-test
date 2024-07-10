import { Dialog, expect, test } from '@playwright/test';
import { ChallengePage } from '../pageObjects/pages/challenge';

test('Algorithm can be used to find the fake gold bar', async ({ page }) => {
    let dialogMessage = '';

    const challengePage = new ChallengePage(page);
    await challengePage.goto();

    let groupWithFake: number[];
    let fake: number;

    // break into 3 groups
    const groupOne = [0, 1, 2];
    const groupTwo = [3, 4, 5];
    const groupThree = [6, 7, 8];

      // Setup event listener for the dialog
      page.on('dialog', async (dialog: Dialog) => {
        dialogMessage = dialog.message();
        await dialog.dismiss();
      });

    // compare group 1 and group 2
    await challengePage.leftBowl.setInputsFromArray(groupOne);
    await challengePage.rightBowl.setInputsFromArray(groupTwo);
    await challengePage.buttons.clickWeighButton();
    await expect(challengePage.gameInfo.weighInfo).toHaveCount(1);
    const groupOneVersusTwoResult = await challengePage.gameInfo.getMostRecentWeighing();

    // If groups 1 and 2 are equal, then the fake gold bar must be in 3
    if(groupOneVersusTwoResult.operator === '=') {
      groupWithFake = groupThree;
    } else if(groupOneVersusTwoResult.operator === '<') {
      groupWithFake = groupOne;
    } else {
      groupWithFake = groupTwo;
    }
    
    // search within the group for the fake
    await challengePage.buttons.clickResetButton();
    await challengePage.leftBowl.setInputsFromArray([groupWithFake[0]]);
    await challengePage.rightBowl.setInputsFromArray([groupWithFake[1]]);
    await challengePage.buttons.clickWeighButton();

    await expect(challengePage.gameInfo.weighInfo).toHaveCount(2);
    const firstIndexVersusSecondResult = await challengePage.gameInfo.getMostRecentWeighing();
    // If index 0 and 1 are equal, then the fake gold bar is index 2
    if(firstIndexVersusSecondResult.operator === '=') {
      fake = groupWithFake[2];
    } else if(firstIndexVersusSecondResult.operator === '<') {
      fake = groupWithFake[0];
    } else {
      fake = groupWithFake[1];
    }

    await challengePage.coins.clickCoinWithValue(fake);
    expect(dialogMessage).toEqual('Yay! You find it!');
  });
  