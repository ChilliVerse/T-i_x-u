import { _decorator, Component, Node, Button, Label, Sprite, SpriteFrame } from 'cc';

const { ccclass, property } = _decorator;

@ccclass('TaiXiuGame')
export class TaiXiuGame extends Component {
    @property(Button)
    betTaiButton: Button = null;

    @property(Button)
    betXiuButton: Button = null;

    @property(Button)
    rollButton: Button = null;

    @property(Label)
    resultLabel: Label = null;

    @property([Sprite])
    diceSprites: Sprite[] = [];

    @property([SpriteFrame])
    diceFrames: SpriteFrame[] = []; // 6 sprite frames for dice faces (1-6)

    private playerBet: string = ''; // 'tai' or 'xiu'
    private diceValues: number[] = [1, 1, 1]; // Default dice values

    start() {
        // Add button click events
        this.betTaiButton.node.on(Button.EventType.CLICK, this.onBetTai, this);
        this.betXiuButton.node.on(Button.EventType.CLICK, this.onBetXiu, this);
        this.rollButton.node.on(Button.EventType.CLICK, this.onRollDice, this);
    }

    onBetTai() {
        this.playerBet = 'tai';
        this.resultLabel.string = 'Bạn đã cược TÀI';
        console.log('Player bet: TÀI'); // Debug
    }

    onBetXiu() {
        this.playerBet = 'xiu';
        this.resultLabel.string = 'Bạn đã cược XỈU';
        console.log('Player bet: XỈU'); // Debug
    }

    onRollDice() {
        if (!this.playerBet) {
            this.resultLabel.string = 'Vui lòng chọn TÀI hoặc XỈU trước!';
            console.log('No bet placed'); // Debug
            return;
        }

        // Roll 3 dice
        this.diceValues = [
            Math.floor(Math.random() * 6) + 1,
            Math.floor(Math.random() * 6) + 1,
            Math.floor(Math.random() * 6) + 1
        ];

        // Update dice sprites
        for (let i = 0; i < this.diceSprites.length; i++) {
            this.diceSprites[i].spriteFrame = this.diceFrames[this.diceValues[i] - 1];
        }

        // Calculate total
        const total = this.diceValues.reduce((sum, val) => sum + val, 0);
        const result = total >= 11 && total <= 18 ? 'TAI' : 'XIU';
        const isWin = result.toLowerCase() === this.playerBet;

        // Debug information
        console.log(`Dice: ${this.diceValues}, Total: ${total}, Result: ${result}, PlayerBet: ${this.playerBet}, IsWin: ${isWin}`);

        // Show result
        this.resultLabel.string = `Tổng: ${total} - Kết quả: ${result} - ${isWin ? 'Thắng!' : 'Thua!'}`;
    }
}