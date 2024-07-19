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

    public BindContextActions: (this: VehicleController) => unknown
    public Enable: (this: VehicleController, enable: boolean, vehicleSeat: VehicleSeat) => unknown
    public Update: (this: VehicleController, moveVector: Vector3, cameraRelative: boolean, usingGamepad: boolean) => unknown
    public ComputeThrottle: (this: VehicleController, localMoveVector: Vector3) => number
    public ComputeSteer: (this: VehicleController, localMoveVector: Vector3) => number
    public SetupAutoPilot: (this: VehicleController) => unknown

    public OnThrottleAccel: (this: VehicleController, actionName: string, inputState: Enum.UserInputState, inputObject: InputObject) => unknown
    public OnThrottleDeccel: (this: VehicleController, actionName: string, inputState: Enum.UserInputState, inputObject: InputObject) => unknown
    public OnSteerRight: (this: VehicleController, actionName: string, inputState: Enum.UserInputState, inputObject: InputObject) => unknown
    public OnSteerLeft: (this: VehicleController, actionName: string, inputState: Enum.UserInputState, inputObject: InputObject) => unknown
}