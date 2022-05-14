export default class Point{
    public x: number;
    public y: number;

    public constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }

    public distanceTo(other: Point){
        return Math.sqrt( (this.x - other.x)**2 + (this.y - other.y)**2 );
    }

    public add(other: Point){
        return new Point(this.x + other.x, this.y + other.y);
    }

    public sub(other: Point){
        return new Point(this.x - other.x, this.y - other.y);
    }

    public smul(a: number){
        return new Point(a * this.x, a * this.y);
    }

}