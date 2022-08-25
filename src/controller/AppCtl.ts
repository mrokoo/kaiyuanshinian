import { IUser } from "@/api/UserApi"


let iLoginUser: IUser = {} as IUser

export default {
    getLoginUser(): IUser {
        return iLoginUser
    }
}