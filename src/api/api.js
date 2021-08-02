import axios from 'axios'

import { BASE_URL } from './endpoint'
import { getAccessToken } from '../utils/storage'

export const api = (endpoint, apiMethod, data, queryParams) => {
    const apiParameter = {
        method: apiMethod,
        url: BASE_URL + endpoint,
        headers: {
            'Access-Control-Allow-Credentials': 'true',
            Authorization: getAccessToken()
        },
        // withCredentials: true
    }
    // Conditinal check for sending data/queryparams in apiParameter
    if (data !== null) {
        apiParameter.data = data
    }
    if (queryParams !== undefined) {
        apiParameter.params = queryParams
    }
    return axiosApi(apiParameter)
}

function axiosApi(content) {
    return axios(content).then(handleResponse)
}

function handleResponse(response) {
    // const type = response.headers['content-type']
    // let res
    // if (type === 'application/json') {
    //     res = response
    // }
    return response
}
