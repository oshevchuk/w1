// OS-Dev

export class Vector2D {
    public length: number;

    // public speedX: number;
    // public speedY: number;

    constructor(public x = 0, public y = 0) {
        this.getLength();
    }

    public getLength(): number {
        this.length = Math.sqrt(this.x * this.x + this.y + this.y);
        return this.length;
    }

    public addVector(vector: Vector2D): Vector2D {
        this.x += vector.x;
        this.y += vector.y;

        // this.speedX += vector.speedX;
        // this.speedY += vector.speedY;

        return this;
    }

    public subtractVector(vector: Vector2D): Vector2D {
        this.x -= vector.x;
        this.y -= vector.y;
        return this;
    }

    public scale(n: number): Vector2D {
        this.x *= n;
        this.y *= n;
        return this;
    }

    public normalize(): Vector2D {
        const length = this.getLength();
        this.x /= length;
        this.y /= length;
        return this;
    }
}
