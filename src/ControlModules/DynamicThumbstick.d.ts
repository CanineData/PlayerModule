import { BaseCharacterController } from "./BaseCharacterController"

export default class DynamicThumbstick extends BaseCharacterController { 
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