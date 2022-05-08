import Entity from "./Entity.js";

export default class Alien extends Entity{
    level: number;
    width: number = 50;
    height: number = 50;
    colour: string = "red";
    public constructor(x: number, y: number, level: number){
        super();
        this.level = level;
    }

    public draw(){
        this.context.fillStyle = this.colour;
        this.context.fillRect(this.x, this.y, this.width, this.height);
    }

    public update(){
        
    }
}