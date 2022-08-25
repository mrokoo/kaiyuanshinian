import app from "./app";
import Tools from '@/utils/Tools'
import { initLpk, lpk } from "./lpk";
import { initLoginUserInfo } from "@/controller/AppCtl";


type IGlobalVarsKey = 'app' | 'lpk' | 'Tools' | 'Ajax'

type IGlobalVars = {
    [key in IGlobalVarsKey]?: any
}

const IGlobalVarsKey: IGlobalVars = {
    app, // 全局应用对象，包含全局数据与操作的方法
    Tools,
    lpk,
}
// 将app绑定到全局对象。
Object.keys(IGlobalVarsKey).map(key => {
    (window as any)[key as IGlobalVarsKey] = IGlobalVarsKey[key as IGlobalVarsKey]
})


export const initApp = async () => {
    await initLoginUserInfo()
    initLpk()

    // 初始化各类业务模块

    const iAllEntry: GlobalType.IRecord = import.meta.glob('@/bmod/*/entry.ts', {eager: true})
    for (const path  in iAllEntry){
        const iEntryFile = iAllEntry[path]
        iEntryFile && iEntryFile.entryInit && await iEntryFile.entryInit()
    }
}