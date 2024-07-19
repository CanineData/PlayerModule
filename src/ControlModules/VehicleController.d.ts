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