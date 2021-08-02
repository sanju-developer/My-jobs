import { JOBAPPLICATION, commonAction } from "../../actions/actionConstant"

const intialState = {
    isApiLoading: false,
    apiData: null,
    apiError: false
}

export const ApplicantsReducer = (state = intialState, action) => {
    switch (action.type) {
        case `${JOBAPPLICATION}_${commonAction.IS_API_LOADING}`:
            return {
                ...state,
                isApiLoading: true
            }

        case `${JOBAPPLICATION}_${commonAction.SET_API_DATA}`:
            return {
                ...state,
                apiData: action.payload.data,
                isApiLoading: false,
                apiError: false
            }

        case `${JOBAPPLICATION}_${commonAction.SET_API_ERROR}`:
            return {
                ...state,
                isApiLoading: false,
                apiError: action.payload
            }

        default: return { ...state }
    }
}