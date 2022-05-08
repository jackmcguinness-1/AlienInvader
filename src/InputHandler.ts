export default class InputHandler{
    public static LeftButtonState: boolean = false;
    public static RightButtonState: boolean = false;
    public static BasicAttackState: boolean = false;
    public static SuperAttackState: boolean = false;

    private static KeyUpHandler = (e: KeyboardEvent) => {
        e.preventDefault();
        switch(e.code){
            case "ArrowLeft":
                InputHandler.LeftButtonState = false;
                break;
            case "ArrowRight":
                InputHandler.RightButtonState = false;
                break;
            case "KeyZ":
                InputHandler.BasicAttackState = false;
                break;
            case "KeyX":
                InputHandler.SuperAttackState = false;
        }
    }

    private static KeyDownHandler = (e: KeyboardEvent) => {
        e.preventDefault();
        switch(e.code){
            case "ArrowLeft":
                InputHandler.LeftButtonState = true;
                break;
            case "ArrowRight":
                InputHandler.RightButtonState = true;
                break;
            case "KeyZ":
                InputHandler.BasicAttackState = true;
                break;
            case "KeyX":
                InputHandler.SuperAttackState = true;
        }
    }

    static Init(){
        document.addEventListener("keyup", InputHandler.KeyUpHandler);
        document.addEventListener("keydown", InputHandler.KeyDownHandler);
    }
}