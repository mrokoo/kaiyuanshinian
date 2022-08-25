import syscfg from "./config/syscfg";
const stModuleName = syscfg.module

export const entryInit = async () => {
    if(!app.checkBmodIsEnable(stModuleName))
        return
    
    app.getAppCtl().mergeLpk(import.meta.glob('./locales/*', {eager: true}))
}

export default {
    
}