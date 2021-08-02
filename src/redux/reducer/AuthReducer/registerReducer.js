import { REGISTER, commonAction } from "../../actions/actionConstant"

const intialState = {
    isApiLoading: false,
    apiData: null,
    apiError: false
}

export const RegisterReducer = (state = intialState, action) => {
    switch (action.type) {
        case `${REGISTER}_${commonAction.IS_API_LOADING}`:
            return {
                ...state,
                isApiLoading: action.payload
            }

        case `${REGISTER}_${commonAction.SET_API_DATA}`:
            return {
                ...state,
                apiData: action.payload.data,
                isApiLoading: false,
                apiError: false
            }

        case `${REGISTER}_${commonAction.SET_API_ERROR}`:
            return {
                ...state,
                isApiLoading: false,
                apiError: action.payload.data
            }

        case `${REGISTER}_${commonAction.CLEAR_ERROR}`:
            return {
                ...state,
                isApiLoading: false,
                apiError: false
            }

        case `${REGISTER}_${commonAction.RESET}`:
            return {
                ...state,
                isApiLoading: false,
                apiError: false,
                apiData: null
            }

        default: return { ...state }
    }
}