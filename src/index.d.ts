import ControlModule from "./ControlModules"
import CameraModule from "./CameraModules"

export default class PlayerModule {
    private cameras: CameraModule
    private controls: ControlModule

    public GetCameras: (this: PlayerModule) => CameraModule
    public GetControls: (this: PlayerModule) => ControlModule
}

export * from './CameraModules'
export * from './ControlModules'