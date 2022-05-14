import Entity from "./Entity.js";
import CanvasHandler from "./CanvasHandler.js";
import InputHandler from "./InputHandler.js";
import EntityHandler from "./EntityHandler.js";
import Rect from "./Shape/Rect.js";
export default class Player extends Entity{
    public static Y_OFFSET: number = 20;
    public static WIDTH: number = 50;
    public static HEIGHT: number = 50;
    public static SPEED: number = 10;
    public static SHOOTSPEED: number = 0.1;
    public static COLOUR = "#ff00ff";

    lastShot: number = 999;
    x: number;
    y: number;
    shape: Rect;

    public constructor(){
        super();
        this.x = (CanvasHandler.canvasWidth - Player.WIDTH) / 2;
        this.y = (CanvasHandler.canvasHeight - Player.HEIGHT) - Player.Y_OFFSET;
        this.shape = new Rect(this.x, this.y, Player.WIDTH, Player.HEIGHT);
        this.colour = Player.COLOUR;
        this.isDrawn = false;
    }

    private setPos(x: number, y: number){
        this.x = x;
        this.y = y;
    }

    public shoot(){
        const midPoint = (this.x + Player.WIDTH / 2);
        EntityHandler.SpawnBullet(midPoint, this.y, -1);
    }

    public canShoot(){
        return (this.lastShot > 1/Player.SHOOTSPEED);
    }

    public updateNeeded(): boolean {
        return InputHandler.LeftButtonState || InputHandler.RightButtonState || InputHandler.BasicAttackState;
    }

    public update(){
        super.update();

        this.lastShot += 1;

        if(InputHandler.LeftButtonState && this.x > 0){
            let vel = this.x < Player.SPEED ? this.x : Player.SPEED;
            this.x -= vel;
        }
        if(InputHandler.RightButtonState && this.x < (CanvasHandler.canvasWidth - Player.WIDTH)){
            let endPos = CanvasHandler.canvasWidth - Player.WIDTH;
            let vel = this.x > (endPos - Player.SPEED) ? (endPos - this.x) : Player.SPEED;
            this.x += vel;
        }
        if(InputHandler.BasicAttackState && this.canShoot() ){
            this.shoot();
            this.lastShot = 0;
        }

        this.shape.xMin = this.x;
    }
}