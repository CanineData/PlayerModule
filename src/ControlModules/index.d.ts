import TouchJumpController from "./TouchJumpController"
import ClickToMoveController from "./ClickToMoveController"
import DynamicThumbstick from "./DynamicThumbstick"
import TouchThumbstick from "./TouchThumbstick";
import Gamepad from "./Gamepad";
import Keyboard from "./Keyboard";

export default class ControlModule {
    public controllers: { [key: string]: unknown }

    public activeControlModule: Controller
    public activeController: Controller
    public touchJumpController: TouchJumpController
    public vehicleController: VehicleController

    public moveFunction: (self: Player, walkDirection: Vector3, relativeToCamera: boolean) => unknown
    public humanoid: Humanoid
    public lastInputType: Enum.UserInputType
    public controlsEnabled: boolean
    public touchControlFrame: Frame
    public currentTorsoAngle: number
    public inputMoveVector: Vector3

    public humanoidSeatedConn: RBXScriptConnection
    public playerGuiAddedConn: RBXScriptConnection

    public playerGui: PlayerGui | undefined
    public touchGui: ScreenGui | undefined

    public GetMoveVector: (this: ControlModule) => Vector3
    public GetEstimatedVRTorsoFrame: (this: ControlModule) => CFrame
    public GetActiveController: (this: ControlModule) => Controller
    public getGamepadRightThumbstickPosition: (this: ControlModule) => Vector3
    public GetClickToMoveController: (this: ControlModule) => ClickToMoveController

    public UpdateActiveControlModuleEnabled: (this: ControlModule) => unknown
    public UpdateTouchGuiVisibility: (this: ControlModule) =>  unknown
    public updateVRMoveVector: (this: ControlModule, moveVector: Vector3) => Vector3
    public Enable: (this: ControlModule, enable?: boolean) => unknown
    public Disable: (this: ControlModule) => unknown
    public SelectComputerMovementModule: (this: ControlModule) => LuaTuple<unknown[]>
    public SelectTouchModule: (this: ControlModule) => LuaTuple<unknown[]>
    public calculateRawMoveVector: (this: ControlModule, humanoid: Humanoid, cameraRelativeMoveVector: Vector3) => Vector3
    public SwitchToController: (this: ControlModule, controlModule: unknown) => unknown
    public CreateTouchGuiContainer: (this: ControlModule) => unknown

    public OnRenderStepped: (this: ControlModule, dt: number) => unknown
    public OnHumanoidSeated: (this: ControlModule, char: Model) => unknown
    public OnCharacterRemoving: (this: ControlModule, char: Model) => unknown
    public OnLastInputTypeChanged: (this: ControlModule, newLastInputType: Enum.UserInputType) => unknown
    public OnComputerMovementModeChange: (this: ControlModule) => unknown
    public OnTouchMovementModeChange: (this: ControlModule) => unknown
}

export { ClickToMoveController, TouchJumpController, DynamicThumbstick, TouchThumbstick, Gamepad, Keyboard }