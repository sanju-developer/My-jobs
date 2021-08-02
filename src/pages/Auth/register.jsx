import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import './auth.scss'

import Layout from '../Layout';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { registerFormConstant, registerFormValidationConstant, emailRegex } from '../../utils/constant';
import MyCustomInput from '../../components/MyCustomInput';
import MyCustomButton from '../../components/MyCustomButton';
import { RegisterAction, ClearRegisterErrorAction, ClearRegisterDataAction } from '../../redux/actions/authActions/registerAction'

function Register(props) {
    const history = useHistory()
    const [registerForm, setregisterForm] = useState(registerFormConstant)
    const [registerFormValidation, setRegisterFormValidation] = useState(registerFormValidationConstant)
    const [passwordAreNotSame, setPasswordAreNotSame] = useState(false)
    const [registerAs, setRegisterAs] = useState(0)
    const dispatch = useDispatch()
    const { isApiLoading, apiError, apiData } = useSelector((state) => state.register)

    useEffect(() => {
        return () => {
            dispatch(ClearRegisterErrorAction())
        }
    }, [])

    useEffect(() => {
        if (apiData) {
            history.push('/home')
            dispatch(ClearRegisterDataAction())
        }
    }, [apiData])

    const onChangeHandler = e => {
        const { id, value } = e.target
        setregisterForm((prevState) => ({ ...prevState, [id]: value }))
        onBlurHandler(e)
        if (id === 'confirmPassword' && value.length !== 0) {
            checkPasswordAndConfirmPswdEqual()
        }
        if (apiError) {
            // dispatch(ClearRegisterErrorAction())
        }
    }

    const registerBtn = (e) => {
        e.preventDefault()
        if (registerForm.fullName.length === 0) {
            setRegisterFormValidation((prevState) => ({ ...prevState, fullName: registerForm.fullName.length === 0 }))
            return
        } else if (!emailRegex.test(registerForm.email)) {
            setRegisterFormValidation((prevState) => ({ ...prevState, email: !emailRegex.test(registerForm.email) }))
            return
        } else if (registerForm.password.length <= 6) {
            setRegisterFormValidation((prevState) => ({ ...prevState, password: registerForm.password.length <= 6 }))
            return
        } else if (registerForm.confirmPassword.length <= 6) {
            setRegisterFormValidation((prevState) => ({ ...prevState, confirmPassword: registerForm.confirmPassword.length <= 6 }))
            return
        }

        if (registerForm.confirmPassword !== registerForm.password) {
            setPasswordAreNotSame(true)
            return
        } else setPasswordAreNotSame(false)

        const payload = {
            "email": registerForm.email,
            "userRole": registerAs,
            "password": registerForm.password,
            "confirmPassword": registerForm.confirmPassword,
            "name": registerForm.fullName,
            "skills": registerForm.skills
        }

        dispatch(RegisterAction(payload))
    }

    const checkPasswordAndConfirmPswdEqual = () => {
        if (registerForm.confirmPassword !== registerForm.password && registerForm.confirmPassword ?.length !== 0) {
            setPasswordAreNotSame(true)
            return
        } else setPasswordAreNotSame(false)
    }

    const onBlurHandler = e => {
        const { id, value } = e.target
        if (id === 'email') {
            setRegisterFormValidation((prevState) => ({ ...prevState, email: !emailRegex.test(value) }))
        } else if (id === 'password' || id === 'confirmPassword') {
            setRegisterFormValidation((prevState) => ({ ...prevState, [id]: value.length <= 6 }))
        } else if (id !== 'skills') {
            setRegisterFormValidation((prevState) => ({ ...prevState, [id]: value.length === 0 }))
        }
        checkPasswordAndConfirmPswdEqual()
    }

    return (
        <div className="register-container">

            <Row className="justify-content-center">
                <Col xs={8} md={5} className="bg-white form-shadow p-4">
                    <Form>
                        <h4 className="text-left mb-4">Signup</h4>
                        <Row className="mb-3">
                            <Form.Label className="mb-3 text-left">I’m a*</Form.Label>
                            <Col md={3}>
                                <Button variant={`${registerAs === 0 ? 'blue-bg' : 'outline-secondary'}`} onClick={() => setRegisterAs(0)} className={`${registerAs === 0 ? 'white' : ''}`}>Recruiter</Button>
                            </Col>
                            <Col md={3}>
                                <Button variant={`${registerAs === 1 ? 'blue-bg' : 'outline-secondary'}`} onClick={() => setRegisterAs(1)} className={`${registerAs === 1 ? 'white' : ''}`}>Candidate</Button>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3 text-left" controlId="fullName">
                            <Form.Label>Full name*</Form.Label>
                            <MyCustomInput value={registerForm.fullName} onChangeHandler={onChangeHandler} type="text" placeholder="Enter your full name" required={true} isInvalid={registerFormValidation.fullName} errorMsg={registerFormValidation.fullName ? 'The field is mandatory.' : ''} onBlurHandler={onBlurHandler} />
                        </Form.Group>
                        <Form.Group className="mb-3 text-left" controlId="email">
                            <Form.Label>Email address*</Form.Label>
                            <MyCustomInput value={registerForm.email} onChangeHandler={onChangeHandler} type="email" placeholder="Enter your email" required={true} isInvalid={registerFormValidation.email} errorMsg={registerFormValidation.email ? 'Invalid email address.' : ''} onBlurHandler={onBlurHandler} />
                        </Form.Group>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3 text-left" controlId="password">
                                    <div className="d-flex justify-content-between">
                                        <Form.Label>Password*</Form.Label>
                                    </div>
                                    <MyCustomInput value={registerForm.password} onChangeHandler={onChangeHandler} type="password" placeholder="Enter your password" required={true} isInvalid={registerFormValidation.password} errorMsg={registerFormValidation.password ? 'Password must be greater than 6 characters.' : ''} />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3 text-left" controlId="confirmPassword">
                                    <div className="d-flex justify-content-between">
                                        <Form.Label>Confirm Password*</Form.Label>
                                    </div>
                                    <MyCustomInput value={registerForm.confirmPassword} onChangeHandler={onChangeHandler} type="password" placeholder="Enter your confirm password" required={true} isInvalid={registerFormValidation.confirmPassword} errorMsg={registerFormValidation.confirmPassword ? 'Password must be greater than 6 characters.' : passwordAreNotSame ? 'Please enter correct confirm password.' : ''} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3 text-left" controlId="skills">
                            <Form.Label>Skills</Form.Label>
                            <MyCustomInput value={registerForm.skills} onChangeHandler={onChangeHandler} type="text" placeholder="Enter comma separated skills" required={true} isInvalid={registerFormValidation.skills} errorMsg={registerFormValidation.skills ? 'The field is mandatory.' : ''} onBlurHandler={onBlurHandler} />
                        </Form.Group>
                        {apiError ? <p className="text-danger text-right">{apiError.errors instanceof Array ? apiError.errors.map(msg => Object.values(msg).map(ms => ms)) : apiError.message}</p> : ''}
                        <div className="justify-content-center submit-btn">
                            <MyCustomButton text="Signup" clickHandler={registerBtn} isLoading={isApiLoading} myClass="form-btn" />
                        </div>
                        <h6>Have an account? <Link to="/login"><span className="blue create-account-link">Login</span></Link></h6>
                    </Form>
                </Col>
            </Row>
        </div>
    );
}

export default Layout(Register);