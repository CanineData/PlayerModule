import ControlModule, * as ControlTypes from "./ControlModules"
import CameraModule, * as CameraTypes from "./CameraModules"

export default class PlayerModule {
    private cameras: CameraModule
    private controls: ControlModule

    public GetCameras: (this: PlayerModule) => CameraModule
    public GetControls: (this: PlayerModule) => ControlModule
}

export { ControlTypes, CameraTypes }