import { ClickToMoveController, DynamicThumbstick, TouchThumbstick, Gamepad, Keyboard } from "."

export type CharacterController = BaseCharacterController | ClickToMoveController | DynamicThumbstick | TouchThumbstick | Gamepad | Keyboard

export abstract class BaseCharacterController {
    public enabled: boolean
    public moveVector: Vector3
    public moveVectorIsCameraRelative: boolean
    public isJumping: boolean
    private connections

    public OnRenderStepped: (this: CharacterController, dt: number) => unknown

    public GetMoveVector: (this: CharacterController) => Vector3
    public IsMoveVectorCameraRelative: (this: CharacterController) => boolean
    public GetIsJumping: (this: CharacterController) => boolean
}