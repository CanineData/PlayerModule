import { BaseCharacterController } from "./BaseCharacterController";

export default class TouchJump extends BaseCharacterController { 
    public parentUIFrame: GuiBase2d
    public jumpButton: GuiButton
    public humanoid: Humanoid

    public jumpPower: number

    public externallyEnabled: boolean
    public jumpStateEnabled: boolean

    private characterAddedConn: RBXScriptConnection
    private humanoidStateEnabledChangedConn: RBXScriptConnection
    private humanoidJumpPowerConn: RBXScriptConnection
    private humanoidParentConn: RBXScriptConnection

    public HumanoidChanged: (this: TouchJump, prop: string) => void
    public HumanoidStateEnabledChanged: (this: TouchJump, state: Enum.HumanoidStateType, isEnabled: boolean) => void
    public CharacterAdded: (this: TouchJump, char: Model) => void

    public EnableButton: (this: TouchJump, enable: boolean) => void
    public UpdateEnabled: (this: TouchJump) => void
    public SetupCharacterAddedFunction: (this: TouchJump) => void
    public Enable: (this: TouchJump, parentFrame: GuiBase2d) => void
    public Create: (this: TouchJump) => void
}