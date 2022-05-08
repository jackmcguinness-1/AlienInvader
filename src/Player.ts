import Entity from "./Entity.js";
import CanvasHandler from "./CanvasHandler.js";
import InputHandler from "./InputHandler.js";
import EntityHandler from "./EntityHandler.js";

export default class Player extends Entity{
    width: number = 50;
    height: number = 50;
    speed: number = 500;
    lastShot: number = 999;
    shootSpeed: number = 0.1;

    public constructor(){
        super();

        this.x = (CanvasHandler.canvasWidth - this.width) / 2;
        this.y = (CanvasHandler.canvasHeight - this.height) - 20;
    }

    private setPos(x: number, y: number){
        this.x = x;
        this.y = y;
    }

    public override draw(){
        this.context.fillStyle = "white";
        this.context.fillRect(this.x, this.y, this.width, this.height);
        this.context.fillStyle = "blue";
        this.context.fillRect(this.x + 5, this.y + 5, this.width - 10, this.height - 10);
    }

    public override clear(){
        this.context.fillStyle = CanvasHandler.backgroundColor;
        this.context.fillRect(this.x, this.y, this.width, this.height);
    }

    public shoot(){
        const midPoint = (this.x + this.width / 2);
        EntityHandler.SpawnBullet(midPoint, this.y, -1);
    }

    public canShoot(){
        return (this.lastShot > 1/this.shootSpeed);
    }

    public override update(){
        this.lastShot += 1;

        if(InputHandler.LeftButtonState && this.x > 0){
            let vel = this.x < this.speed ? this.x : this.speed;
            this.x -= vel;
        }
        if(InputHandler.RightButtonState && this.x < (CanvasHandler.canvasWidth - this.width)){
            let endPos = CanvasHandler.canvasWidth - this.width;
            let vel = this.x > (endPos - this.speed) ? (endPos - this.x) : this.speed;
            this.x += vel;
        }
        if(InputHandler.BasicAttackState && this.canShoot() ){
            this.shoot();
            this.lastShot = 0;
        }
    }


}