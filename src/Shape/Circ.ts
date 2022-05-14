import { ShapeType } from "./Shape.js";
import Shape from "./Shape.js";
import Point from "./Point.js";

export default class Circ extends Shape{
    public x: number;
    public y: number;
    public radius: number;
    public size: number;
    public center: Point;

    public constructor(x: number, y: number, radius: number){
        super(ShapeType.Circ);
        this.x = x;
        this.y = y;
        this.radius = radius;

        this.size = this.getSize();
        this.center = this.getCenter();
    }

    public getSize(): number{
        return Math.PI * this.radius * this.radius;
    }

    public getCenter(): Point{
        return new Point(this.x, this.y);
    }

    public draw(ctx: CanvasRenderingContext2D, colour: string){
        ctx.fillStyle = colour;
        ctx.beginPath();
        ctx.arc(this.center.x, this.center.y, this.radius ,0, 2 * Math.PI);
        ctx.fill();
    }

}