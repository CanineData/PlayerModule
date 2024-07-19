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


    public ActivateOcclusionModule: (this: CameraModule, occlusionMode: Enum.DevCameraOcclusionMode) => unknown
    public ActivateCameraController: (this: CameraModule, cameraMovementMode: unknown, legacyCameraType?: Enum.CameraType) => unknown
    public Update: (this: CameraModule, dt: number) => unknown

    public OnCameraSubjectChanged: (this: CameraModule) => unknown
    public OnCameraTypeChanged: (this: CameraModule, newCameraType: Enum.CameraType) => unknown
    public OnCurrentCameraChanged: (this: CameraModule) => unknown
    public OnLocalPlayerCameraPropertyChanged: (this: CameraModule, propertyName: string) => unknown
    public OnUserGameSettingsPropertyChanged: (this: CameraModule, propertyName: string) => unknown
    public OnCharacterAdded: (this: CameraModule, char: Model, player: Player) => unknown
    public OnCharacterRemoving: (this: CameraModule, char: Model, player: Player) => unknown
    public OnPlayerAdded: (this: CameraModule, player: Player) => unknown
    public OnMouseLockToggled: (this: CameraModule) => unknown

    public ShouldUseVehicleCamera: (this: CameraModule) => boolean

    public GetCameraControlChoice: (this: CameraModule) => Enum.ComputerCameraMovementMode | Enum.DevComputerCameraMovementMode
    public GetCameraMovementModeFromSettings: (this: CameraModule) => Enum.ComputerCameraMovementMode | Enum.DevComputerCameraMovementMode
}

export { VehicleCamera, LegacyCamera, ClassicCamera, OrbitalCamera, VRCamera, VRVehicleCamera, Poppercam, Invisicam, TransparencyController, MouseLockController }