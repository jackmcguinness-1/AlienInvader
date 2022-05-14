import CanvasHandler from "./CanvasHandler.js";
import Shape from "./Shape/Shape.js";
import {ShapeType} from "./Shape/Shape.js";
export default abstract class Entity{
    public canvas: HTMLCanvasElement;
    public context: CanvasRenderingContext2D;
    public width: number = 0;
    public height: number = 0;
    public speed: number = 0;
    public x: number = 0;
    public y: number = 0;
    public shape: Shape;
    public colour = "#000000";
    public isDrawn = false;

    public constructor(){
        this.canvas = CanvasHandler.canvas;
        this.context = CanvasHandler.context;
        this.shape = new Shape(ShapeType.None);
    }

    public draw(): void{
        if(this.updateNeeded() || !this.isDrawn){
            console.log("drawing");
            this.shape.draw(this.context, this.colour);
            this.isDrawn = true;
        }
    }

    public updateNeeded(): boolean{
        return false;
    }

    public update(): void{
        ;
    }

    public clear(): void{
        this.shape.draw(this.context, CanvasHandler.backgroundColor);
        this.isDrawn = false;
    }

    public checkHitbox(otherX: number, otherY: number): boolean {
        return false;
    }

    public getCenter(): number[]{
        let cX = this.x + this.width/2;
        let cY = this.y + this.height/2
        return [cX, cY];
    }

}