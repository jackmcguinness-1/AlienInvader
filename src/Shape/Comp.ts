import Shape from "./Shape.js";
import {ShapeType} from "./Shape.js";
import Rect from "./Rect.js";
import Circ from "./Circ.js";
import Point from "./Point.js";

type componentShape = {
    shape: Shape,
    id: number
}

export default class Comp extends Shape{
    public componentShapes: componentShape[];

    public constructor(){
        super(ShapeType.Comp);
        this.componentShapes = [];
    }

    public addShape(shape: Shape): number{
        let idToAdd = this.componentShapes.length;
        let comp = {
            shape: shape,
            id: idToAdd
        }
        this.componentShapes.push(comp);
        return idToAdd;
    }

    public removeShape(shapeToRemoveId: number): boolean{
        let shapeRemoved = false;

        let numShapes = this.componentShapes.length;

        this.componentShapes = this.componentShapes.filter( shape => shape.id != shapeToRemoveId );

        if(this.componentShapes.length != numShapes){
            shapeRemoved = true;
        }

        return shapeRemoved;
    }

}