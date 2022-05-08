import Entity from "./Entity.js";
import CanvasHandler from "./CanvasHandler.js";
import EntityHandler from "./EntityHandler.js";

export default class Bullet extends Entity{
    public direction: number;
    public speed: number = 10;
    public width: number = 5;
    public height: number = 10;

    constructor(x: number, y: number, direction: number){
        super();
        this.x = x;
        this.y = y;
        this.direction = direction;
    }

    public override update(){
        this.y += this.speed * this.direction;

        if(this.y < 0 || this.y > CanvasHandler.canvasHeight){
            EntityHandler.RemoveBullet(this);
        }
    }

    public override draw(){
        this.context.fillStyle = "red";
        this.context.fillRect(this.x, this.y, this.width, this.height);
    }

    public override clear(){
        this.context.fillStyle = CanvasHandler.backgroundColor;
        this.context.fillRect(this.x, this.y, this.width, this.height);
    }

}