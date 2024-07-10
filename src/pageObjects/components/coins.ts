import { Page, Locator } from 'playwright';

export class Coins {
    private readonly page: Page;
    root: Locator;
    coin: Locator;

    constructor(page: Page) {
        this.page = page;
        this.root = this.page.locator('.coins');
    }

    async clickCoinWithValue(value: number): Promise<void> {
        const coin = this.root.locator(`#coin_${value}`);
        await coin.click();
    }
}