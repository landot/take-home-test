import { Locator, Page } from 'playwright';

export class Bowl {
    private readonly page: Page;
    side: string;
    input: Locator;
    root: Locator;

    constructor(page: Page, side: 'left' | 'right') {
        this.page = page;
        this.side = side;
        this.root = this.page.locator('.game-board');
        this.input = this.root.locator(`.board-row input[data-side="${side}"]`);
    }

    async setInputsFromArray(values: number[]): Promise<void> {
        for (let i = 0; i < values.length; i++) {
            const currentValue = values[i];
            await this.input.nth(i).fill(currentValue.toString());
        }
    }
}
