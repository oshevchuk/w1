export class Walker {
    private color = 'blue';
    private x = 0;
    private y = 0;

    constructor(private ctx: CanvasRenderingContext2D) { }

    public setPosition(x: number, y: number): void {
        this.x = x;
        this.y = y;
        this.draw();
    }

    public draw(): void {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, 10, 10);
    }

    public step(): void {
        this.x += Math.round(Math.random() * 2) - 1;
        this.y += Math.round(Math.random() * 2) - 1;
    }
}
