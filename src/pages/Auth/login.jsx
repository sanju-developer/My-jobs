import React, { useState, useEffect } from 'react'
import { Form, Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom"
import './auth.scss'

import { loginFormConstant, loginFormValidationConstant, emailRegex } from '../../utils/constant'
import MyCustomInput from '../../components/MyCustomInput'
import Layout from '../Layout'
import MyCustomButton from '../../components/MyCustomButton';
import { LoginAction, ClearLoginErrorAction, ClearLoginDataAction } from '../../redux/actions/authActions/loginAction'

function Login() {
    const history = useHistory()
    const dispatch = useDispatch()
    const [loginForm, setLoginForm] = useState(loginFormConstant)
    const [loginFormValidation, setLoginFormValidation] = useState(loginFormValidationConstant)
    const { isApiLoading, apiError, apiData } = useSelector((state) => state.login)

    useEffect(() => {
        return () => {
            dispatch(ClearLoginErrorAction())
        }
    }, [])

    useEffect(() => {
        if (apiData) {
            dispatch(ClearLoginDataAction())
            history.push('/home')
        }
    }, [apiData])

    const onChangeHandler = e => {
        const { id, value } = e.target
        setLoginForm((prevState) => ({ ...prevState, [id]: value }))
        onBlurHandler(e)

        if (apiError) {
            // dispatch(ClearLoginErrorAction())
        }
    }

    const loginBtn = (e) => {
        e.preventDefault()
        if (!emailRegex.test(loginForm.email)) {
            setLoginFormValidation((prevState) => ({ ...prevState, email: !emailRegex.test(loginForm.email) }))
            return
        } else if (loginForm.password.length === 0) {
            setLoginFormValidation((prevState) => ({ ...prevState, password: loginForm.password.length === 0 }))
            return
        }
        const payload = {
            "email": loginForm.email,
            "password": loginForm.password
        }
        dispatch(LoginAction(payload))
    }

    const onBlurHandler = e => {
        const { id, value } = e.target
        if (id === 'email') {
            setLoginFormValidation((prevState) => ({ ...prevState, email: !emailRegex.test(value) }))
        } else setLoginFormValidation((prevState) => ({ ...prevState, password: value === 0 }))
    }

    return (
        <div className="login-container form-adjuster">
            <Row className="justify-content-center">
                <Col xs={8} md={5} className="bg-white form-shadow p-4">
                    <Form>
                        <h4 className="text-left mb-4">Login</h4>
                        <Form.Group className="mb-3 text-left" controlId="email">
                            <Form.Label>Email address*</Form.Label>
                            <MyCustomInput value={loginForm.email} onChangeHandler={onChangeHandler} type="email" placeholder="Enter your email" required={true} isInvalid={loginFormValidation.email} errorMsg={loginFormValidation.email ? 'Invalid email address.' : ''} onBlurHandler={onBlurHandler} />
                        </Form.Group>

                        <Form.Group className="mb-3 text-left" controlId="password">
                            <div className="d-flex justify-content-between">
                                <Form.Label>Password*</Form.Label>
                                <Link to="/forgot-password"><span className="blue">Forgot your password?</span></Link>
                            </div>
                            <MyCustomInput value={loginForm.password} onChangeHandler={onChangeHandler} type="password" placeholder="Enter your password" required={true} isInvalid={loginFormValidation.password} errorMsg={loginFormValidation.password ? 'The field is mandatory.' : ''} />
                            {apiError ? <p className="text-danger text-right">Incorrect email address or password.</p> : ''}
                        </Form.Group>
                        <div className="justify-content-center submit-btn">
                            <MyCustomButton text="Login" clickHandler={loginBtn} isLoading={isApiLoading} myClass="form-btn" />
                        </div>
                        <h6>New to MyJobs? <Link to="/register"><span className="blue create-account-link">Create an account</span></Link></h6>
                    </Form>
                </Col>
            </Row>
        </div>
    );
}

export default Layout(Login);