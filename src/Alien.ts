import Entity from "./Entity.js";

export default class Alien extends Entity{
    level: number;
    public constructor(x: number, y: number, level: number){
        super();
        this.level = level;
    }
}