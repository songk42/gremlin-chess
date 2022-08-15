import { Board } from "./Board";
import { Axis } from "./GameUtil";

interface Transition {
    value: number
    start: number
    startTime: number
    time: number
    duration: number
}

interface Pointer {
    x: number
    y: number
    col: number
    row: number
    moveX: number
    moveY: number
}

export class Game {
    board!: Board
    width!: number
    height!: number
    tileSize!: number

    private ctx: CanvasRenderingContext2D

    transitionTime = 150
    pointers: Map<number, Pointer> = new Map()
    transitions: Map<number, Transition> = new Map()

    private moveAxis: Axis = Axis.Row

    constructor(public canvas: HTMLCanvasElement) {
        this.canvas.tabIndex = 0;
        this.ctx = canvas.getContext("2d");
    }

    private render() {
        this.ctx.clearRect(0, 0, this.width, this.height);

        for (let i = 0; i < 8; i++) {
            const transition = this.transitions.get(i);
            const moveAmount = transition ? transition.value : 0;

            for (let j = Math.floor(-moveAmount); j < 8 - Math.floor(moveAmount); j++) {
                // row is predetermined; col is the most recent column the player has passed
                let row = i;
                let col = j % 8;

                // position of cursor/finger
                let x = j + moveAmount;
                let y = i;

                if (this.moveAxis == Axis.Col) {
                    // in this case, col is predetermined, and row is the most recent row the player has passed
                    row = col;
                    col = i;
                    y = x;
                    x = i;
                }
            }
        }
    }
}