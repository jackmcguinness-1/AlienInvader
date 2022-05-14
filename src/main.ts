import CanvasHandler from "./CanvasHandler.js";
import GameController from "./GameController.js";
import EntityHandler from "./EntityHandler.js";


(window as any).EntityHandler = EntityHandler;
(window as any).CanvasHandler = CanvasHandler;

let gameController = new GameController();

gameController.start();