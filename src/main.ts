import GameController from "./GameController.js";
import EntityHandler from "./EntityHandler.js";

(window as any).EntityHandler = EntityHandler;

let gameController = new GameController();

gameController.start();