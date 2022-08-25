import { LOGIN_TOKEN } from '@/utils/Constants'
import mdlUserApi, { IUser } from "@/api/UserApi"
import { changeLocale, mergeLpk } from '@/config/lpk'


let iLoginUser: IUser = {} as IUser

export const initLoginUserInfo = async () => {
    if (Tools.Cookie.getItem(LOGIN_TOKEN)) {
        iLoginUser = await mdlUserApi.getSelfInfo()
    }
}
export default {
    getLoginUser(): IUser {
        return iLoginUser
    },
    changeLocale,
    mergeLpk,
}