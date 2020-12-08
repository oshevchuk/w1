import { Component, ElementRef, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Walker } from 'src/app/core/walker';
import { Square } from './square';

@Component({
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainPageComponent implements OnInit, OnDestroy {
    @ViewChild('canvas', { static: true }) canvas: ElementRef<HTMLCanvasElement>;
    private ctx: CanvasRenderingContext2D;

    requestId;
    interval;
    squares: Square[] = [];

    walker: Walker;

    constructor(
        private ngZone: NgZone
    ) { }

    ngOnInit(): void {
        this.ctx = this.canvas.nativeElement.getContext('2d');

        this.ctx.fillStyle = 'red';

        this.walker = new Walker(this.ctx);
        this.walker.setPosition(300, 300);

        this.ngZone.runOutsideAngular(() => this.tick());
        setInterval(() => {
            this.tick();
        }, 200);
    }

    tick() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.squares.forEach((square: Square) => {
            square.moveRight();
        });
        this.walker.draw();
        this.walker.step();

        this.requestId = requestAnimationFrame(() => this.tick);
    }

    play() {
        const square = new Square(this.ctx);
        this.squares = this.squares.concat(square);
    }

    animate(): void { }

    ngOnDestroy(): void {
        clearInterval(this.interval);
        cancelAnimationFrame(this.requestId);
    }
}

