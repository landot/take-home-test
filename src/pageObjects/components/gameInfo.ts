import { Page, Locator } from 'playwright';
import { WeighingData } from '../../types/weighingData';
import parseWeighingData from '../../utils/parseWeighData';

export class GameInfo {
    private readonly page: Page;
    root: Locator;
    weighButton: Locator;
    weighInfo: Locator;

    constructor(page: Page) {
        this.page = page;
        this.root = this.page.locator('.game-info');
        this.weighInfo = this.root.locator('li');
    }

    async getMostRecentWeighing(): Promise<WeighingData> {
        const recent = await this.weighInfo.last().innerText();
        return parseWeighingData(recent);
    }

    async getAllWeighings(): Promise<WeighingData[]> {
        return (await this.weighInfo.allInnerTexts()).map(text => parseWeighingData(text));
    }
}