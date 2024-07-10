import { Page } from 'playwright';
import { Buttons } from '../components/Button';
import { GameInfo } from '../components/GameInfo';
import { Bowl } from '../components/Bowl';

export class ChallengePage {
    readonly page: Page;
    readonly buttons: Buttons;
    readonly gameInfo: GameInfo;
    readonly leftBowl: Bowl;
    readonly rightBowl: Bowl;

    constructor(page: Page) {
        this.page = page;

        // components
        this.buttons = new Buttons(this.page);
        this.gameInfo = new GameInfo(this.page);
        this.leftBowl = new Bowl(this.page, 'left');
        this.rightBowl = new Bowl(this.page, 'right');
    }

    async goto() {
        await this.page.goto('http://sdetchallenge.fetch.com/');
    }
}