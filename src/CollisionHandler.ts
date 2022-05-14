import Entity from "./Entity.js";
import Shape from "./Shape/Shape.js";
import {ShapeType} from "./Shape/Shape.js";
import Rect from "./Shape/Rect.js";
import Circ from "./Shape/Circ.js";
import Point from "./Shape/Point.js";
import Comp from "./Shape/Comp.js";

export default class CollisionHandler{

    public static CheckCollisions(entity: Entity): boolean{
        if(entity.shape.shapeType == ShapeType.None){
            return false;
        }
        else if(entity.shape.shapeType == ShapeType.Rect){
            
        }

        return false;
    }

    public static CheckAgainstAllEntities(shapeTypeA: ShapeType, shapeTypeB: ShapeType){

    }

    public static CheckRectWithRect(rect1: Rect, rect2: Rect): boolean{
        if  (rect1.xMin < ( rect2.xMin + rect2.width ) && 
            ( (rect1.xMin + rect1.width) > rect2.xMin) &&
            (rect1.yMin < (rect2.yMin + rect2.height)) &&
            ( (rect1.height + rect1.yMin) < rect2.yMin))
        {
            console.log("rect on rect collision detected");
            return true;
        }
        else{
            return false;
        }
    }

}