import { Page, Locator } from 'playwright';

export class Buttons {
    private readonly page: Page;
    resetButton: Locator;
    weighButton: Locator;

    constructor(page: Page) {
        this.page = page;
        // because there are multiple elements with #reset 
        this.resetButton = this.page.locator('div:not(.result) > #reset');
        this.weighButton = this.page.locator('#weigh');
    }

    async clickResetButton(): Promise<void> {
        await this.resetButton.click();
    }

    async clickWeighButton(): Promise<void> {
        await this.weighButton.click();
    }
}