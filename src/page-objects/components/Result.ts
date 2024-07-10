import { Page, Locator } from 'playwright';

export class Result {
    private readonly page: Page;
    result: Locator;
    root: Locator;

    constructor(page: Page) {
        this.page = page;
        this.root = this.page.locator('.result');
        this.result = this.root.locator(' .button');
    }

    async getResultValue(): Promise<string | null> {
        return await this.result.textContent();
    }
}