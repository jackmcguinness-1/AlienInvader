import { ShapeType } from "./Shape.js";
import Shape from "./Shape.js";
import Point from "./Point.js";

export default class Rect extends Shape{
    public xMin: number;
    public yMin: number;
    public xMax: number;
    public yMax: number;
    public width: number;
    public height: number;
    public radius: number;
    public center: Point;
    public size: number;

    public constructor(x: number, y: number, w: number, h: number){
        super(ShapeType.Rect);
        this.xMin = x;
        this.yMin = y;
        this.xMax = x + w;
        this.yMax = y + h;
        this.width = w;
        this.height = h;

        this.size = this.getSize();
        this.center = this.getCenter();
        this.radius = this.center.distanceTo( new Point(this.xMin, this.yMin) );
    }

    public getSize(): number{
        return this.width * this.height;
    }

    public getCenter(): Point{
        return new Point( (this.xMin + this.xMax)/2, (this.yMin + this.yMax)/2 );
    }

    public draw(ctx: CanvasRenderingContext2D, colour: string){
        ctx.fillStyle = colour;
        ctx.fillRect(this.xMin, this.yMin, this.width, this.height);
    }


}