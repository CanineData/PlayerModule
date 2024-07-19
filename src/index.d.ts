import ControlModule, * as ControlTypes from "./ControlModules"
import CameraModule, * as CameraTypes from "./CameraModules"

declare class PlayerModule {
    private cameras: CameraModule
    private controls: ControlModule

    public GetCameras: () => CameraModule
    public GetControls: () => ControlModule
}

declare const module: PlayerModule
export default module

export { ControlTypes, CameraTypes }