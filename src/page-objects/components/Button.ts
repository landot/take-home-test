import { Page, Locator } from 'playwright';

export class Buttons {
    private readonly page: Page;
    resetButton: Locator;
    weighButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.resetButton = this.page.locator('#reset');
        this.weighButton = this.page.locator('#weigh');
    }

    async clickResetButton(): Promise<void> {
        await this.resetButton.click();
    }

    async clickWeighButton(): Promise<void> {
        await this.weighButton.click();
    }
}