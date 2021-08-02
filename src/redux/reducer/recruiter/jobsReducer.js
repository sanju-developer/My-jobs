import { JOBS, commonAction } from "../../actions/actionConstant"

const intialState = {
    isApiLoading: false,
    apiData: null,
    apiError: false
}

export const JobsReducer = (state = intialState, action) => {
    switch (action.type) {
        case `${JOBS}_${commonAction.IS_API_LOADING}`:
            return {
                ...state,
                isApiLoading: true
            }

        case `${JOBS}_${commonAction.SET_API_DATA}`:
            return {
                ...state,
                apiData: action.payload.data,
                isApiLoading: false,
                apiError: false
            }

        case `${JOBS}_${commonAction.SET_API_ERROR}`:
            return {
                ...state,
                isApiLoading: false,
                apiError: action.payload
            }

        default: return { ...state }
    }
}