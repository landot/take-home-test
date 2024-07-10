import { Page } from 'playwright';
import { Buttons } from '../components/Button';
import { GameInfo } from '../components/GameInfo';
import { Bowl } from '../components/Bowl';
import { Coins } from '../components/Coins';

export class ChallengePage {
    readonly page: Page;
    readonly buttons: Buttons;
    readonly gameInfo: GameInfo;
    readonly leftBowl: Bowl;
    readonly rightBowl: Bowl;
    readonly coins: Coins;

    constructor(page: Page) {
        this.page = page;

        // components
        this.buttons = new Buttons(this.page);
        this.gameInfo = new GameInfo(this.page);
        this.leftBowl = new Bowl(this.page, 'left');
        this.rightBowl = new Bowl(this.page, 'right');
        this.coins = new Coins(this.page);
    }

    async goto() {
        await this.page.goto('http://sdetchallenge.fetch.com/');
    }
}