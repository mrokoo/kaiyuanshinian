import app from "./app";
import Tools from '@/utils/Tools'
type IGlobalVarsKey = 'app' | 'lpk' | 'Tools' | 'Ajax'

type IGlobalVars = {
    [key in IGlobalVarsKey]?: any
}

const IGlobalVarsKey: IGlobalVars = {
    app, // 全局应用对象，包含全局数据与操作的方法
    Tools,
}
// 将app绑定到全局对象。
Object.keys(IGlobalVarsKey).map(key => {
    (window as any)[key as IGlobalVarsKey] = IGlobalVarsKey[key as IGlobalVarsKey]
})


export const initApp = async () => {

}