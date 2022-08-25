import { LOCALE_OPTIONS } from "@/utils/Constants"
import { get, isArray } from "lodash"
const stLocalStorageName = 'locale'


const tblLpk: Record<string, string | string[]> = {}

export const initLpk = () => {
    mergeLpk(import.meta.glob("@/locales/*", { eager: true }))
}


export const getLocale = () => {
    const stDefaultLocale = 'zh-CN'
    // 通过用户自定义配置信息获取
    let stLanguage = get(app.getAppCtl().getLoginUser(),'cust.locale')
    // 2. 其次从本地存储中获取
    stLanguage = stLanguage || Tools.LocalStorage.getItem(stLocalStorageName)
    // 3. 最终使用默认语言包
    stLanguage = stLanguage || stDefaultLocale

    return stLanguage
}


type ILpkFile = {
    [path: string]: {
        default: Record<string, string | string[]>
    }
}
export const mergeLpk = (importLpkFiles: ILpkFile) => {
    const stLocaleLanguage = getLocale()
    for (const path in importLpkFiles) {
        if (-1 == path.indexOf(stLocaleLanguage))
            continue

        const { default: iLpkFileItem } = importLpkFiles[path]
        for (const stLpkKey in iLpkFileItem) {
            tblLpk[stLpkKey] = iLpkFileItem[stLpkKey]
        }
    }
}
export type IFnLpk = (key: string, option?: {index?: number; default?: string}) => string
export const lpk = (key: string, option?: {index?: number, default?: string}) => {
    const value = tblLpk[key]

    if (isArray(value)) {
        return value[option?.index || 0] || option?.default || key
    }

    return value || option?.default || key
}


export const changeLocale = (stLocale: string) => {
    if (!LOCALE_OPTIONS.find(stLocaleItem => stLocaleItem == stLocale)){
        return
    }
    Tools.LocalStorage.setItem(stLocalStorageName, stLocale)
    document.location.reload()
}