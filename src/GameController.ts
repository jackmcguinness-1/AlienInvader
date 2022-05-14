import EntityHandler from "./EntityHandler.js";
import CanvasHandler from "./CanvasHandler.js";
import InputHandler from "./InputHandler.js";

export default class GameController{

    clear(){
        EntityHandler.Entities.filter( entity => entity.updateNeeded() ).forEach( entity => entity.clear() );
    }
    update(){
        EntityHandler.Entities.forEach( entity => entity.update() );
    }
    
    draw(){
        EntityHandler.Entities.filter( entity => entity.updateNeeded() || !entity.isDrawn ).forEach( entity => entity.draw() );
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