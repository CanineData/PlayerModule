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

    public GetMoveVector: (this: typeof ControlModule) => Vector3
    public GetEstimatedVRTorsoFrame: (this: typeof ControlModule) => CFrame
    public GetActiveController: (this: typeof ControlModule) => typeof this.activeController
    public getGamepadRightThumbstickPosition: (this: typeof ControlModule) => Vector3
    public GetClickToMoveController: (this: typeof ControlModule) => ClickToMoveController

    public UpdateActiveControlModuleEnabled: (this: typeof ControlModule) => unknown
    public UpdateTouchGuiVisibility: (this: typeof ControlModule) =>  unknown
    public updateVRMoveVector: (this: typeof ControlModule, moveVector: Vector3) => Vector3
    public Enable: (this: typeof ControlModule, enable?: boolean) => unknown
    public Disable: (this: typeof ControlModule) => unknown
    public SelectComputerMovementModule: (this: typeof ControlModule) => LuaTuple<unknown[]>
    public SelectTouchModule: (this: typeof ControlModule) => LuaTuple<unknown[]>
    public calculateRawMoveVector: (this: typeof ControlModule, humanoid: Humanoid, cameraRelativeMoveVector: Vector3) => Vector3
    public SwitchToController: (this: typeof ControlModule, controlModule: unknown) => unknown
    public CreateTouchGuiContainer: (this: typeof ControlModule) => unknown

    public OnRenderStepped: (this: typeof ControlModule, dt: number) => unknown
    public OnHumanoidSeated: (this: typeof ControlModule, char: Model) => unknown
    public OnCharacterRemoving: (this: typeof ControlModule, char: Model) => unknown
    public OnLastInputTypeChanged: (this: typeof ControlModule, newLastInputType: Enum.UserInputType) => unknown
    public OnComputerMovementModeChange: (this: typeof ControlModule) => unknown
    public OnTouchMovementModeChange: (this: typeof ControlModule) => unknown
}

export { ClickToMoveController, TouchJumpController, DynamicThumbstick, TouchThumbstick, Gamepad, Keyboard }