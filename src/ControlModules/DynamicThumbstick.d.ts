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

    public Enable: (this: DynamicThumbstick, enable: boolean, uiParentFrame: Frame) => boolean
    public FadeThumbstick: (this: DynamicThumbstick, visible: boolean) => unknown
    public FadeThumbstickFrame: (this: DynamicThumbstick, fadeDuration: number, fadeRation: number) => unknown
    public DoFadeInBackground: (this: DynamicThumbstick) => unknown
    public DoMove: (this: DynamicThumbstick, direction: Vector3) => unknown
    public LayoutMiddleImages: (this: DynamicThumbstick, startPos: Vector3, endPos: Vector3) => unknown
    public MoveStick: (this: DynamicThumbstick, pos: Vector2) => unknown
    public BindContextActions: (this: DynamicThumbstick) => unknown
    public UnbindContextActions: (this: DynamicThumbstick) => unknown
    public Create: (this: DynamicThumbstick, parentFrame: GuiBase2d) => unknown

    public InputInFrame: (inputObject: InputObject) => boolean

    public OnInputEnded: (this: DynamicThumbstick) => unknown
}