import { BaseCharacterController } from "./BaseCharacterController"

export default class Keyboard extends BaseCharacterController { 
    public CONTROL_ACTION_PRIORITY: number
    
    public textFocusReleasedConn: RBXScriptConnection
    public textFocusGainedConn: RBXScriptConnection
    public windowFocusReleasedConn: RBXScriptConnection

    public forwardValue: number
    public backwardValue: number
    public leftValue: number
    public rightValue: number

    public jumpEnabled: boolean

    public Enable: (this: typeof Keyboard, enable: boolean) => boolean
    public UpdateMovement: (this: typeof Keyboard, inputState: Enum.UserInputState) => unknown
    public BindContextActions: (this: typeof Keyboard) => unknown
    public UnbindContextActions: (this: typeof Keyboard) => unknown
    public ConnectFocusEventListeners: (this: typeof Keyboard) => unknown
    public DisconnectFocusEventListeners: (this: typeof Keyboard) => unknown
}