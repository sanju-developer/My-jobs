export const loginFormConstant = {
    email: '',
    password: ''
}

export const loginFormValidationConstant = {
    email: false,
    password: false
}

export const resetPswdForm = {
    email: ''
}

export const forgotFormValidationConstant = {
    email: false
}

export const resetPswdFormConstant = {
    password: '',
    confirmPassword: ''
}

export const resetPswdFormValidationConstant = {
    password: false,
    confirmPassword: false
}

export const registerFormConstant = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    skills: ''
}

export const registerFormValidationConstant = {
    fullName: false,
    email: false,
    password: false,
    confirmPassword: false,
}

export const postJobFormConstant = {
    title: '',
    description: '',
    location: ''
}

export const postJobValidationFormConstant = {
    title: false,
    description: false,
    location: false
}

export const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

export const toastType = {
    LOGIN_SUCCESSFULLY: 'LOGIN_SUCCESSFULLY'
}

export const dummyApplicants = [
    { id: 'jshdkja', name: 'Eliza Lucas', email: 'abc123@email.com', skills: 'Coding, designing, graphics, website, app ui' },
    { id: 'jshdasd', name: 'Nick Gordon', email: 'abc123@email.com', skills: 'Coding, designing, graphics, website, app ui' },
    { id: 'jsasdas', name: 'Matthew Pierce', email: 'abc123@email.com', skills: 'Coding, designing, graphics, website, app ui' },
    { id: 'jshwerw', name: 'Emma Green', email: 'abc123@email.com', skills: 'Coding, designing, graphics, website, app ui' },
    { id: 'jshxase', name: 'Janet Cooper', email: 'abc123@email.com', skills: 'Coding, designing, graphics, website, app ui' },
    { id: 'sadsddd', name: 'Lee Cooper', email: 'abc123@email.com', skills: 'Coding, designing, graphics, website, app ui' }
]