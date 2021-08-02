import { LOGIN, commonAction } from "../../actions/actionConstant"

const intialState = {
    isApiLoading: false,
    apiData: null,
    apiError: false
}

export const LoginReducer = (state = intialState, action) => {
    switch (action.type) {
        case `${LOGIN}_${commonAction.IS_API_LOADING}`:
            return {
                ...state,
                isApiLoading: true
            }

        case `${LOGIN}_${commonAction.SET_API_DATA}`:
            return {
                ...state,
                apiData: action.payload.data,
                isApiLoading: false,
                apiError: false
            }

        case `${LOGIN}_${commonAction.SET_API_ERROR}`:
            return {
                ...state,
                isApiLoading: false,
                apiError: action.payload.data
            }

        case `${LOGIN}_${commonAction.CLEAR_ERROR}`:
            return {
                ...state,
                isApiLoading: false,
                apiError: false
            }

        case `${LOGIN}_${commonAction.RESET}`:
            return {
                ...state,
                isApiLoading: false,
                apiError: false,
                apiData: null
            }

        default: return { ...state }
    }
}