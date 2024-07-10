import { Page } from 'playwright';
import { Buttons } from '../components/button';
import { GameInfo } from '../components/gameInfo';
import { Bowl } from '../components/bowl';
import { Coins } from '../components/coins';
import { Result } from '../components/result';

export class ChallengePage {
    readonly page: Page;
    readonly buttons: Buttons;
    readonly gameInfo: GameInfo;
    readonly leftBowl: Bowl;
    readonly rightBowl: Bowl;
    readonly coins: Coins;
    readonly result: Result;

    constructor(page: Page) {
        this.page = page;

        // components
        this.buttons = new Buttons(this.page);
        this.gameInfo = new GameInfo(this.page);
        this.leftBowl = new Bowl(this.page, 'left');
        this.rightBowl = new Bowl(this.page, 'right');
        this.coins = new Coins(this.page);
        this.result = new Result(this.page);
    }

    async goto() {
        await this.page.goto('http://sdetchallenge.fetch.com/');
    }
}