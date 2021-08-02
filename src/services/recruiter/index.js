import { api } from "../../api/api";
import { apiEndpoints, httpMethods } from "../../api/endpoint";

export async function getAllJobsService(pageNo, offsetvalue) {
    return api(apiEndpoints.recruiterJobs, httpMethods.GET, null, { limit: pageNo, offset: offsetvalue })
}

export async function getAllApplicationJobsService(id) {
    return api(`${apiEndpoints.recruiterJobs}/${id}/candidates`, httpMethods.GET)
}

export async function createJobService(payload) {
    return api(`${apiEndpoints.jobs}`, httpMethods.POST, payload)
}