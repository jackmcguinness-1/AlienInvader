import Entity from "./Entity.js";
import CanvasHandler from "./CanvasHandler.js";
import EntityHandler from "./EntityHandler.js";
import CollisionHandler from "./CollisionHandler.js";
import Rect from "./Shape/Rect.js";

export default class Bullet extends Entity{
    public static SPEED: number = 30;
    public static WIDTH: number = 5;
    public static HEIGHT: number = 10;
    public static COLOUR = "#ffffff";

    public direction: number;
    public shape: Rect;

    constructor(x: number, y: number, direction: number){
        super();
        this.x = x;
        this.y = y;
        this.shape = new Rect(this.x, this.y, Bullet.WIDTH, Bullet.HEIGHT);
        this.direction = direction;
    }

    public update(){
        this.y += Bullet.SPEED * this.direction;
        this.shape.yMin = this.y;

        CollisionHandler.CheckCollisions(this);

        if(this.y < 0 || this.y > CanvasHandler.canvasHeight){
            EntityHandler.RemoveBullet(this);
        }
    }

    public draw(){
        this.shape.draw(this.context, Bullet.COLOUR);
    }

    public clear(){
        this.shape.draw(this.context, CanvasHandler.backgroundColor);
    }

    public checkCollisions(){
        for(let i = 0; i < EntityHandler.Entities.length; i++){
            let isCollision = EntityHandler.Entities[i].checkHitbox(this.x, this.y);
        }
    }

    public checkHitbox(otherX: number, otherY: number): boolean{
        let centerPos = this.getCenter();
        let x = centerPos[0];
        let y = centerPos[1];
        let dist = Math.sqrt( (x - otherX)**2 + (y - otherY)**2 );
        if(dist <= this.width){
            return true;
        }
        else{
            return false;
        }
    }

}