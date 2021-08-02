import { REGISTER, commonAction } from "../actionConstant"
import { RegisterService } from "../../../services/authService"
import { setAccessToken, setUserId, setUserRole, setUserName } from "../../../utils/storage"

export function RegisterAction(payload) {
    return async dispatch => {
        try {
            dispatch({ type: `${REGISTER}_${commonAction.IS_API_LOADING}`, payload: true })
            const response = await RegisterService(payload)
            setAccessToken(response.data.data.token)
            setUserId(response.data.data.id)
            setUserRole(response.data.data.userRole)
            setUserName(response.data.data.name)
            dispatch({ type: `${REGISTER}_${commonAction.SET_API_DATA}`, payload: response.data })
        } catch (error) {
            dispatch({ type: `${REGISTER}_${commonAction.SET_API_ERROR}`, payload: error.response })
        }
    }
}

export function ClearRegisterErrorAction() {
    return dispatch => {
        dispatch({ type: `${REGISTER}_${commonAction.CLEAR_ERROR}` })
    }
}

export function ClearRegisterDataAction() {
    return dispatch => {
        dispatch({ type: `${REGISTER}_${commonAction.RESET}` })
    }
}
