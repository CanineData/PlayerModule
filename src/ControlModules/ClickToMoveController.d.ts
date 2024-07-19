import Keyboard from "./Keyboard"

export default class ClickToMoveController extends Keyboard { 
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