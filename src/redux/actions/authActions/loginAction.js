import { toast } from "react-toastify"

import { LOGIN, commonAction } from "../actionConstant"
import { LoginService } from "../../../services/authService"
import { setAccessToken, setUserId, setUserRole, setUserName } from "../../../utils/storage"

export function LoginAction(payload) {
    return async dispatch => {
        try {
            dispatch({ type: `${LOGIN}_${commonAction.IS_API_LOADING}` })
            const response = await LoginService(payload)
            setAccessToken(response.data.data.token)
            setUserId(response.data.data.id)
            setUserRole(response.data.data.userRole)
            setUserName(response.data.data.name)
            dispatch({ type: `${LOGIN}_${commonAction.SET_API_DATA}`, payload: response.data })
            toast(<div className="text-left">
                <h2 className="blue">Login</h2>
                <p className="fx-14 success">You have successfully logged in.</p></div>, {
                toastId: 'login'
            });
        } catch (error) {
            dispatch({ type: `${LOGIN}_${commonAction.SET_API_ERROR}`, payload: error.response })
        }
    }
}

export function ClearLoginErrorAction() {
    return dispatch => {
        dispatch({ type: `${LOGIN}_${commonAction.CLEAR_ERROR}` })
    }
}

export function ClearLoginDataAction() {
    return dispatch => {
        dispatch({ type: `${LOGIN}_${commonAction.RESET}` })
    }
}
