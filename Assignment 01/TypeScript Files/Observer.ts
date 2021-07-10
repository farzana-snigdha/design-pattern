import {Data} from "./Data";

export interface Observer {
    inputData(data: Data) :void
}