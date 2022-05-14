export enum ShapeType{
    None,
    Point,
    Rect,
    Circ,
    Comp
}

export default class Shape{
    public shapeType: ShapeType;

    public constructor(shapeType: ShapeType){
        this.shapeType = shapeType
    }

    public draw(ctx: CanvasRenderingContext2D, colour: string){
        ;
    }
}