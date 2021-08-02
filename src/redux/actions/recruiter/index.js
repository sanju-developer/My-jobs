import { JOBS, CREATEJOBS, JOBAPPLICATION, commonAction } from "../actionConstant"
import { getAllJobsService, getAllApplicationJobsService, createJobService } from '../../../services/recruiter'
import { toast } from "react-toastify"

export function GetAllJobsAction(pageNo = 10, offsetvalue = 0) {
    return async dispatch => {
        try {
            dispatch({ type: `${JOBS}_${commonAction.IS_API_LOADING}` })
            const response = await getAllJobsService(pageNo, offsetvalue)
            dispatch({ type: `${JOBS}_${commonAction.SET_API_DATA}`, payload: response })
        } catch (error) {
            dispatch({ type: `${JOBS}_${commonAction.SET_API_ERROR}`, payload: error.response })
        }
    }
}

export function GetAllJobsApplicationsAction(id) {
    return async dispatch => {
        try {
            dispatch({ type: `${JOBAPPLICATION}_${commonAction.IS_API_LOADING}` })
            const response = await getAllApplicationJobsService(id)
            dispatch({ type: `${JOBAPPLICATION}_${commonAction.SET_API_DATA}`, payload: response })
        } catch (error) {
            dispatch({ type: `${JOBAPPLICATION}_${commonAction.SET_API_ERROR}`, payload: error.response })
        }
    }
}

export function createJobAction(payload) {
    return async dispatch => {
        try {
            dispatch({ type: `${CREATEJOBS}_${commonAction.IS_API_LOADING}` })
            const response = await createJobService(payload)
            dispatch({ type: `${CREATEJOBS}_${commonAction.SET_API_DATA}`, payload: response.data })
            toast(<div className="text-left">
                <p className="fx-14 success">You have successfully posted a job.</p></div>, {
                toastId: 'job-created'
            });
        } catch (error) {
            dispatch({ type: `${CREATEJOBS}_${commonAction.SET_API_ERROR}`, payload: error.response })
        }
    }
}
export function ClearPostJobDataAction() {
    return dispatch => {
        dispatch({ type: `${CREATEJOBS}_${commonAction.RESET}` })
    }
}