import { api } from "../../api/api";
import { apiEndpoints, httpMethods } from "../../api/endpoint";

export async function RegisterService(data) {
    return api(apiEndpoints.register, httpMethods.POST, data)
}

export async function LoginService(data) {
    return api(apiEndpoints.login, httpMethods.POST, data)
}

export async function forgotPswdService(email) {
    return api(apiEndpoints.resetpassword, httpMethods.GET, null, { email: email })
}