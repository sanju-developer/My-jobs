export const setAccessToken = (token) => {
    localStorage.setItem('accessToken', token)
}

export const getAccessToken = () => {
    return localStorage.getItem('accessToken')
}

export function setUserRole(role) {
    localStorage.setItem('userRole', role)
}

export function getUserRole() {
    return localStorage.getItem('userRole')
}

export function setUserId(id) {
    localStorage.setItem('userId', id)
}

export function getUserId() {
    return localStorage.getItem('userId')
}

export const setUserName = (name) => {
    localStorage.setItem('name', name)
}

export const clearLS = () => {
    localStorage.clear()
}