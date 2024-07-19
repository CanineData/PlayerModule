import VehicleCamera from "./VehicleCamera"
import LegacyCamera from "./LegacyCamera"
import ClassicCamera from "./ClassicCamera"
import OrbitalCamera from "./OrbitalCamera"
import VRCamera from "./VRCamera"
import VRVehicleCamera from "./VRVehicleCamera"

import { Poppercam, Invisicam } from "./OcclusionModules"
import TransparencyController from "./TransparencyController"
import MouseLockController from "./MouseLockController"

export default class CameraModule {
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

export { VehicleCamera, LegacyCamera, ClassicCamera, OrbitalCamera, VRCamera, VRVehicleCamera, Poppercam, Invisicam, TransparencyController, MouseLockController }