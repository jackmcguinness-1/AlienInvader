import CanvasHandler from "./CanvasHandler.js";

export default abstract class Entity{
    public canvas: HTMLCanvasElement;
    public context: CanvasRenderingContext2D;
    public width: number = 0;
    public height: number = 0;
    public speed: number = 0;
    public x: number = 0;
    public y: number = 0;

    public constructor(){
        this.canvas = CanvasHandler.canvas;
        this.context = CanvasHandler.context;
    }

    public draw(){
        ;
    }

    public update(){
        ;
    }

    public clear(){
        ;
    }
}