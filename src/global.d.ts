import { IApp } from '@/config/app'
import { IFnLpk } from './config/lpk'
import { ITools } from './utils/Tools'



declare global {
    declare namespace GlobalType {
        type IKey = string | number
        type IRecord = Record<IKey, any>
    }

    const app: IApp
    const Tools: ITools
    const lpk: IFnLpk

    interface Window {
        app: IApp,
        Tools: ITools,
        lpk: IFnLpk
    }

}

declare module 'vue' {
    interface ComponentCustomProperties {
        app: IApp;
        Tools: ITools;
        lpk: IFnLpk,
    }
}

export {}

