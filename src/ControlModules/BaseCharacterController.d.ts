import { ClickToMoveController, DynamicThumbstick, TouchThumbstick, Gamepad, Keyboard } from "."

export type CharacterController = BaseCharacterController | ClickToMoveController | DynamicThumbstick | TouchThumbstick | Gamepad | Keyboard

export abstract class BaseCharacterController {
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