import { BaseCharacterController } from "./BaseCharacterController";

export default class TouchThumbstick extends BaseCharacterController {
    public isFollowStick: boolean
    
    public thumbstickFrame: Frame
    public moveTouchObject: Instance
    public screenPos: UDim2
    public stickImage: ImageLabel | ImageButton // Might be either, currently unknown
    public thumbstickSize: number

    private onTouchMovedConn: RBXScriptConnection
    private onTouchEndedConn: RBXScriptConnection

    public Enable: (this: TouchThumbstick, enable: boolean | undefined, uiParentFrame: GuiBase2d) => boolean
    public Create: (this: TouchThumbstick, parentFrame: GuiBase2d) => void

    public OnInputEnded: (this: TouchThumbstick) => void
}