import { expect, test } from '@playwright/test';
import { ChallengePage } from '../../pageObjects/pages/challenge';
test.describe('Weigh Tests', () => {
    let challengePage: ChallengePage;

    test.beforeEach('Setup', async ({ page }) => {
        challengePage = new ChallengePage(page);
        await challengePage.goto();
    });
  
    test('Clicking weigh with no bars returns [] = []', async () => {
        await challengePage.buttons.clickWeighButton();
        const weighing = await challengePage.gameInfo.getMostRecentWeighing();
        const result = await challengePage.result.getResultValue();
        expect(weighing).toEqual({"left": [], "operator": "=", "right": []});
        expect(result).toBe('=')
    });
    
    test('Clicking weigh with 1 left bar and 2 right bars will have a < operator', async () => {
        await challengePage.leftBowl.setInputsFromArray([1]);
        await challengePage.rightBowl.setInputsFromArray([3, 4]);
        await challengePage.buttons.clickWeighButton();
        const weighing = await challengePage.gameInfo.getMostRecentWeighing();
        const result = await challengePage.result.getResultValue();
        expect(weighing).toEqual({"left": [1], "operator": "<", "right": [3, 4]});
        expect(result).toBe('<')
    });

    test('Clicking weigh with 2 left bars and 1 right bars will have a < operator', async () => {
        await challengePage.leftBowl.setInputsFromArray([1, 2]);
        await challengePage.rightBowl.setInputsFromArray([3]);
        await challengePage.buttons.clickWeighButton();
        const weighing = await challengePage.gameInfo.getMostRecentWeighing();
        const result = await challengePage.result.getResultValue();
        expect(weighing).toEqual({"left": [1, 2], "operator": ">", "right": [3]});
        expect(result).toBe('>')
    });

    test('Clicking weigh multiple times will result in a list of weighings', async () => {
        await challengePage.buttons.clickWeighButton();
        
        await expect(challengePage.gameInfo.weighInfo).toHaveCount(1);
        let weighings = await challengePage.gameInfo.getAllWeighings();
        expect(weighings[0]).toEqual({"left": [], "operator": "=", "right": []});
        
        await challengePage.leftBowl.setInputsFromArray([1, 2]);
        await challengePage.rightBowl.setInputsFromArray([3]);
        await challengePage.buttons.clickWeighButton();

        await expect(challengePage.gameInfo.weighInfo).toHaveCount(2);
        weighings = await challengePage.gameInfo.getAllWeighings();

        expect(weighings[0]).toEqual({"left": [], "operator": "=", "right": []});
        expect(weighings[1]).toEqual({"left": [1, 2], "operator": ">", "right": [3]});
    });
});
