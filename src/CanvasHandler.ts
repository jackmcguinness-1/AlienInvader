export default class CanvasHandler{
    public static canvas: HTMLCanvasElement;
    public static context: CanvasRenderingContext2D;
    public static canvasWidth: number;
    public static canvasHeight: number;
    public static backgroundColor = "black";

    public static Init(){
        CanvasHandler.canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
        CanvasHandler.context = CanvasHandler.canvas.getContext("2d") as CanvasRenderingContext2D;
        CanvasHandler.canvasHeight = CanvasHandler.canvas.clientHeight;
        CanvasHandler.canvasWidth = CanvasHandler.canvas.clientWidth;

        CanvasHandler.clearScreen();
    }

    public static clearScreen(){
        CanvasHandler.context.fillStyle = CanvasHandler.backgroundColor;
        CanvasHandler.context.fillRect(0, 0, CanvasHandler.canvasWidth, CanvasHandler.canvasHeight);
    }
}