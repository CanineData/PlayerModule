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

    public DisconnectEvents: (this: ClickToMoveController) => unknown
    public Start: (this: ClickToMoveController) => unknown
    public Stop: (this: ClickToMoveController) => unknown
    public UpdateJump: (this: ClickToMoveController) => unknown
    public SetShowPath: (this: ClickToMoveController, value: boolean) => unknown
    public CleanupPath: (this: ClickToMoveController) => unknown
    public SetWaypointTexture: (this: ClickToMoveController, texture: string) => unknown
    public SetWaypointRadius: (this: ClickToMoveController, radius: number) => unknown
    public SetEndWaypointTexture: (this: ClickToMoveController, texture: string) => unknown
    public SetWaypointsAlwaysOnTop: (this: ClickToMoveController, alwaysOnTop: boolean) => unknown
    public SetFailureAnimationEnabled: (this: ClickToMoveController, enabled: boolean) => unknown
    public SetIgnoredPartsTag: (this: ClickToMoveController, tag: string) => unknown
    public SetUseDirectPath: (this: ClickToMoveController, directPath: boolean) => unknown
    public SetAgentSizeIncreaseFactor: (this: ClickToMoveController, increaseFactorPercent: number) => unknown
    public SetUnreachableWaypointTimeout: (this: ClickToMoveController, timeoutInSec: number) => unknown
    public SetUserJumpEnabled: (this: ClickToMoveController, jumpEnabled: boolean) => unknown
    public MoveTo: (this: ClickToMoveController, position: Vector3, showPath: boolean, useDirectPath: boolean) => boolean

    public OnTouchBegan: (this: ClickToMoveController, input: InputObject, processed: boolean) => unknown
    public OnTouchChanged: (this: ClickToMoveController, input: InputObject, processed: boolean) => unknown
    public OnTouchEnded: (this: ClickToMoveController, input: InputObject, processed: boolean) => unknown
    public OnCharacterAdded: (this: ClickToMoveController, character: Model) => unknown

    public GetShowPath: (this: ClickToMoveController) => boolean
    public GetWaypointTexture: (this: ClickToMoveController) => string
    public GetWaypointRadius: (this: ClickToMoveController) => number
    public GetEndWaypointTexture: (this: ClickToMoveController) => string
    public GetWaypointsAlwaysOnTop: (this: ClickToMoveController) => boolean
    public GetFailureAnimationEnabled: (this: ClickToMoveController) => boolean
    public GetIgnoredPartsTag: (this: ClickToMoveController) => string
    public GetuseDirectPath: (this: ClickToMoveController) => boolean
    public GetAgentSizeIncreaseFactor: (this: ClickToMoveController) => number
    public GetUnreachableWaypointTimeout: (this: ClickToMoveController) => number
    public GetUserJumpEnabled: (this: ClickToMoveController) => boolean
}