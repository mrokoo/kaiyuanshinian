import { IApp } from '@/config/app'
import { ITools } from './utils/Tools'



declare global {
    declare namespace GlobalType {
        type IKey = string | number
        type IRecord = Record<IKey, any>
    }

    const app: IApp
    const Tools: ITools

    interface Window {
        app: IApp,
        Tools: ITools
    }

}

declare module 'vue' {
    interface ComponentCustomProperties {
        app: IApp;
        Tools: ITools;
    }
}

export {}

