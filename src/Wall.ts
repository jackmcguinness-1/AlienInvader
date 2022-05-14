import Entity from "./Entity.js";

export default class Wall extends Entity{

    private bitMap = 
    [
        [0,0,1,1,1,1,0,0],
        [1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1],
        [0,0,1,1,1,1,0,0],
    ]

    private static shapeDim = [8, 8];

    private static colour = "#00ffff";

    private static scale = 10;

    public constructor(xPos: number, yPos: number){
        super();
        this.x = xPos;
        this.y = yPos;
    }
    
    public draw(): void {
        this.context.fillStyle = Wall.colour;

        for(let i = 0; i < Wall.shapeDim[0]; i++){
            for(let j = 0; j < Wall.shapeDim[1]; j++){
                let xPos = this.x + Wall.scale * j;
                let yPos = this.y + Wall.scale * i;
                if(this.bitMap[i][j] == 1){
                    this.context.fillRect(xPos, yPos, Wall.scale, Wall.scale);
                }
            }
        }

    }

}