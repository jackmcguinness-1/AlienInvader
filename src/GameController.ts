import EntityHandler from "./EntityHandler.js";
import CanvasHandler from "./CanvasHandler.js";
import InputHandler from "./InputHandler.js";

export default class GameController{
    update(){
        EntityHandler.Entities.forEach( entity => entity.update() );
    }
    
    draw(){
        EntityHandler.Entities.forEach( entity => entity.draw() );
    }
    
    clear(){
        EntityHandler.Entities.forEach( entity => entity.clear() );
    }
    
    loop() {
        this.clear();
        this.update();
        this.draw();
        setTimeout(this.loop.bind(this), 17);
    }
    
    start(){
        InputHandler.Init();
        CanvasHandler.Init();
        EntityHandler.Init();
    
        this.loop();
    }
}