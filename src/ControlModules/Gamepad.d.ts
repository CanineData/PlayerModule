import { BaseCharacterController } from "./BaseCharacterController"

export default class Gamepad extends BaseCharacterController { 
    public CONTROL_ACTION_PRIORITY: number

    public forwardValue: number
    public backwardValue: number
    public leftValue: number
    public rightValue: number

    public activeGamepad: Enum.UserInputType
    
    private gamepadConnectedConn: RBXScriptConnection
    private gamepadDisconnectedConn: RBXScriptConnection

    public Enable: (enable: boolean) => boolean
    public GetHighestPriorityGamepad: (this: Gamepad) => Enum.UserInputType
    public BindContextActions: (this: Gamepad) => boolean
    public UnbindContextActions: (this: Gamepad) => boolean

    public ConnectGamepadConnectionListeners: (this: Gamepad) => unknown
    public DisconnectGamepadConnectionListeners: (this: Gamepad) => unknown

    public OnCurrentGamepadDisconnected: (this: Gamepad) => unknown
}