import { Page } from 'playwright';
import { Buttons } from '../components/Button';
import { GameInfo } from '../components/GameInfo';

export class ChallengePage {
    readonly page: Page;
    readonly buttons: Buttons;
    readonly gameInfo: GameInfo;

    constructor(page: Page) {
        this.page = page;

        // components
        this.buttons = new Buttons(this.page);
        this.gameInfo = new GameInfo(this.page);
    }

    async goto() {
        await this.page.goto('http://sdetchallenge.fetch.com/');
    }
}