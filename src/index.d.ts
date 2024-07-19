declare class PlayerModule {
    private cameras: CameraModule
    private controls: ControlModule

    public GetCameras: () => CameraModule
    public GetControls: () => ControlModule
}

declare class BaseCamera {  }

declare class VehicleCamera extends BaseCamera {  }

declare class LegacyCamera extends BaseCamera {  }

declare class ClassicCamera extends BaseCamera {  }

declare class OrbitalCamera extends BaseCamera {  }

declare class VRBaseCamera extends BaseCamera {  }

declare class VRCamera extends VRBaseCamera {  }

declare class VRVehicleCamera extends VRBaseCamera {  }


declare class BaseOcclusion {  }

declare class Poppercam extends BaseOcclusion {  }

declare class Invisicam extends BaseOcclusion {  }


declare class MouseLockController {  }

declare class TransparencyController {  }


declare class CameraModule {
    public activeCameraController: VehicleCamera | LegacyCamera | ClassicCamera | OrbitalCamera | VRCamera | VRVehicleCamera
    public activeOcclusionModule: Poppercam | Invisicam
    public activeTransparencyController: TransparencyController
    public activeMouseLockController: MouseLockController

    public currentComputerCameraMovementMode: unknown

    public cameraSubjectChangedConn: RBXScriptConnection
    public cameraTypeChangedConn: RBXScriptConnection


    public ActivateOcclusionModule: (this: typeof CameraModule, occlusionMode: Enum.DevCameraOcclusionMode) => unknown
    public ActivateCameraController: (this: typeof CameraModule, cameraMovementMode: unknown, legacyCameraType?: Enum.CameraType) => unknown
    public Update: (this: typeof CameraModule, dt: number) => unknown

    public OnCameraSubjectChanged: (this: typeof CameraModule) => unknown
    public OnCameraTypeChanged: (this: typeof CameraModule, newCameraType: Enum.CameraType) => unknown
    public OnCurrentCameraChanged: (this: typeof CameraModule) => unknown
    public OnLocalPlayerCameraPropertyChanged: (this: typeof CameraModule, propertyName: string) => unknown
    public OnUserGameSettingsPropertyChanged: (this: typeof CameraModule, propertyName: string) => unknown
    public OnCharacterAdded: (this: typeof CameraModule, char: Model, player: Player) => unknown
    public OnCharacterRemoving: (this: typeof CameraModule, char: Model, player: Player) => unknown
    public OnPlayerAdded: (this: typeof CameraModule, player: Player) => unknown
    public OnMouseLockToggled: (this: typeof CameraModule) => unknown

    public ShouldUseVehicleCamera: (this: typeof CameraModule) => boolean

    public GetCameraControlChoice: (this: typeof CameraModule) => Enum.ComputerCameraMovementMode | Enum.DevComputerCameraMovementMode
    public GetCameraMovementModeFromSettings: (this: typeof CameraModule) => Enum.ComputerCameraMovementMode | Enum.DevComputerCameraMovementMode
}


declare class VehicleController { 
    public CONTROL_ACTION_PRIORITY: number

    public enabled: boolean
    public vehicleSeat: VehicleSeat
    public throttle: number
    public steer: number
    public acceleration: number
    public decceleration: number
    public turningRight: number
    public turningLeft: number
    public vehicleMoveVector: Vector3

    public autopilot?: {
        MaxSpeed?: number,
        MaxSteeringAngle?: number
    }

    public BindContextActions: (this: typeof VehicleController) => unknown
    public Enable: (this: typeof VehicleController, enable: boolean, vehicleSeat: VehicleSeat) => unknown
    public Update: (this: typeof VehicleController, moveVector: Vector3, cameraRelative: boolean, usingGamepad: boolean) => unknown
    public ComputeThrottle: (this: typeof VehicleController, localMoveVector: Vector3) => number
    public ComputeSteer: (this: typeof VehicleController, localMoveVector: Vector3) => number
    public SetupAutoPilot: (this: typeof VehicleController) => unknown

    public OnThrottleAccel: (this: typeof VehicleController, actionName: string, inputState: Enum.UserInputState, inputObject: InputObject) => unknown
    public OnThrottleDeccel: (this: typeof VehicleController, actionName: string, inputState: Enum.UserInputState, inputObject: InputObject) => unknown
    public OnSteerRight: (this: typeof VehicleController, actionName: string, inputState: Enum.UserInputState, inputObject: InputObject) => unknown
    public OnSteerLeft: (this: typeof VehicleController, actionName: string, inputState: Enum.UserInputState, inputObject: InputObject) => unknown
}


declare abstract class BaseCharacterController {
    private enabled: boolean
    private moveVector: Vector3
    private moveVectorIsCameraRelative: boolean
    private isJumping: boolean
    private connections

    public OnRenderStepped: (this: CharacterController, dt: number) => unknown

    public GetMoveVector: (this: CharacterController) => Vector3
    public IsMoveVectorCameraRelative: (this: CharacterController) => boolean
    public GetIsJumping: (this: CharacterController) => boolean
}

declare class Gamepad extends BaseCharacterController { 
    public CONTROL_ACTION_PRIORITY: number

    public forwardValue: number
    public backwardValue: number
    public leftValue: number
    public rightValue: number

    public activeGamepad: Enum.UserInputType
    
    private gamepadConnectedConn: RBXScriptConnection
    private gamepadDisconnectedConn: RBXScriptConnection

    public Enable: (enable: boolean) => boolean
    public GetHighestPriorityGamepad: (this: typeof Gamepad) => Enum.UserInputType
    public BindContextActions: (this: typeof ClickToMoveController) => boolean
    public UnbindContextActions: (this: typeof ClickToMoveController) => boolean

    public ConnectGamepadConnectionListeners: (this: typeof ClickToMoveController) => unknown
    public DisconnectGamepadConnectionListeners: (this: typeof ClickToMoveController) => unknown

    public OnCurrentGamepadDisconnected: (this: typeof ClickToMoveController) => unknown
}

declare class Keyboard extends BaseCharacterController { 
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

declare class ClickToMoveController extends Keyboard { 
    public fingerTouches: { [key: string]: string }
    public numUnsunkTouches: number

    public mouse1Down: number
    public mouse1DownPos: Vector2
    public mouse2DownTime: number
    public mouse2DownPos: Vector2
    public mouse2UpTime: number

    public keyboardMoveVector: Vector3

    private tapConn
    private inputBeganConn
    private inputChangedConn
    private inputEndedConn
    private humanoidDiedConn
    private characterChildAddedConn
    private onCharacterAddedConn
    private characterChildRemovedConn
    private renderSteppedConn
    private menuOpenedConnection

    public running: boolean
    public wasdEnabled: boolean

    public DisconnectEvents: (this: typeof ClickToMoveController) => unknown
    public Start: (this: typeof ClickToMoveController) => unknown
    public Stop: (this: typeof ClickToMoveController) => unknown
    public UpdateJump: (this: typeof ClickToMoveController) => unknown
    public SetShowPath: (this: typeof ClickToMoveController, value: boolean) => unknown
    public CleanupPath: (this: typeof ClickToMoveController) => unknown
    public SetWaypointTexture: (this: typeof ClickToMoveController, texture: string) => unknown
    public SetWaypointRadius: (this: typeof ClickToMoveController, radius: number) => unknown
    public SetEndWaypointTexture: (this: typeof ClickToMoveController, texture: string) => unknown
    public SetWaypointsAlwaysOnTop: (this: typeof ClickToMoveController, alwaysOnTop: boolean) => unknown
    public SetFailureAnimationEnabled: (this: typeof ClickToMoveController, enabled: boolean) => unknown
    public SetIgnoredPartsTag: (this: typeof ClickToMoveController, tag: string) => unknown
    public SetUseDirectPath: (this: typeof ClickToMoveController, directPath: boolean) => unknown
    public SetAgentSizeIncreaseFactor: (this: typeof ClickToMoveController, increaseFactorPercent: number) => unknown
    public SetUnreachableWaypointTimeout: (this: typeof ClickToMoveController, timeoutInSec: number) => unknown
    public SetUserJumpEnabled: (this: typeof ClickToMoveController, jumpEnabled: boolean) => unknown
    public MoveTo: (this: typeof ClickToMoveController, position: Vector3, showPath: boolean, useDirectPath: boolean) => boolean

    public OnTouchBegan: (this: typeof ClickToMoveController, input: InputObject, processed: boolean) => unknown
    public OnTouchChanged: (this: typeof ClickToMoveController, input: InputObject, processed: boolean) => unknown
    public OnTouchEnded: (this: typeof ClickToMoveController, input: InputObject, processed: boolean) => unknown
    public OnCharacterAdded: (this: typeof ClickToMoveController, character: Model) => unknown

    public GetShowPath: (this: typeof ClickToMoveController) => boolean
    public GetWaypointTexture: (this: typeof ClickToMoveController) => string
    public GetWaypointRadius: (this: typeof ClickToMoveController) => number
    public GetEndWaypointTexture: (this: typeof ClickToMoveController) => string
    public GetWaypointsAlwaysOnTop: (this: typeof ClickToMoveController) => boolean
    public GetFailureAnimationEnabled: (this: typeof ClickToMoveController) => boolean
    public GetIgnoredPartsTag: (this: typeof ClickToMoveController) => string
    public GetuseDirectPath: (this: typeof ClickToMoveController) => boolean
    public GetAgentSizeIncreaseFactor: (this: typeof ClickToMoveController) => number
    public GetUnreachableWaypointTimeout: (this: typeof ClickToMoveController) => number
    public GetUserJumpEnabled: (this: typeof ClickToMoveController) => boolean
}

declare class DynamicThumbstick extends BaseCharacterController { 
    public moveTouchObject?: InputObject
    public moveTouchLockedIn: boolean
    public moveTouchFirstChanged: boolean
    public moveTouchStartPosition: Vector2

    public startImage?: ImageLabel
    public endImage?: ImageLabel
    public middleImages?: [ImageLabel]

    public startImageFadeTween?: Tween
    public endImageFadeTween?: Tween
    public middleImageFadeTweens?: Tween

    public isFirstTouch: boolean
    public thumbstickFrame?: Frame

    private OnRenderSteppedConn

    public fadeInAndOutBalance: number
    public fadeInAndOutHalfDuration: number
    public hasFadedBackgroundInPortrait: boolean
    public hasFadedBackgroundInLandscape: boolean

    public tweenInAlphaStart?: number
    public TweenOutAlphaStart?: number

    public Enable: (this: typeof DynamicThumbstick, enable: boolean, uiParentFrame: Frame) => boolean
    public FadeThumbstick: (this: typeof DynamicThumbstick, visible: boolean) => unknown
    public FadeThumbstickFrame: (this: typeof DynamicThumbstick, fadeDuration: number, fadeRation: number) => unknown
    public DoFadeInBackground: (this: typeof DynamicThumbstick) => unknown
    public DoMove: (this: typeof DynamicThumbstick, direction: Vector3) => unknown
    public LayoutMiddleImages: (this: typeof DynamicThumbstick, startPos: Vector3, endPos: Vector3) => unknown
    public MoveStick: (this: typeof DynamicThumbstick, pos: Vector2) => unknown
    public BindContextActions: (this: typeof DynamicThumbstick) => unknown
    public UnbindContextActions: (this: typeof DynamicThumbstick) => unknown
    public Create: (this: typeof DynamicThumbstick, parentFrame: GuiBase2d) => unknown

    public InputInFrame: (inputObject: InputObject) => boolean

    public OnInputEnded: (this: typeof DynamicThumbstick) => unknown
}

declare class TouchThumbstick { 

}

declare class TouchJumpController {  }

type CharacterController = BaseCharacterController | ClickToMoveController | DynamicThumbstick | TouchThumbstick | Gamepad | Keyboard

declare class ControlModule {
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

declare const module: PlayerModule

export default module