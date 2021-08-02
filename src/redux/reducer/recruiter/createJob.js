import { CREATEJOBS, commonAction } from "../../actions/actionConstant"

const intialState = {
    isApiLoading: false,
    apiData: null,
    apiError: false
}

export const CreateJobsReducer = (state = intialState, action) => {
    switch (action.type) {
        case `${CREATEJOBS}_${commonAction.IS_API_LOADING}`:
            return {
                ...state,
                isApiLoading: true
            }

        case `${CREATEJOBS}_${commonAction.SET_API_DATA}`:
            return {
                ...state,
                apiData: action.payload.data,
                isApiLoading: false,
                apiError: false
            }

        case `${CREATEJOBS}_${commonAction.SET_API_ERROR}`:
            return {
                ...state,
                isApiLoading: false,
                apiError: action.payload
            }

        case `${CREATEJOBS}_${commonAction.RESET}`:
            return {
                ...state,
                isApiLoading: false,
                apiError: false,
                apiData: null
            }
        default: return { ...state }
    }
}