import React, { useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';

import { resetPswdForm, emailRegex, forgotFormValidationConstant } from '../../utils/constant';
import MyCustomButton from '../../components/MyCustomButton';
import MyCustomInput from '../../components/MyCustomInput';
import Layout from '../Layout';
import { forgotPswdService } from '../../services/authService';
import './auth.scss'

function ForgotPswd() {
    const [forgotPswdForm, setResetPswdForm] = useState(resetPswdForm)
    const [forgotPswdFormValidation, setForgotPswdFormValidation] = useState(forgotFormValidationConstant)

    const onChangeHandler = e => {
        const { id, value } = e.target
        setResetPswdForm((prevState) => ({ ...prevState, [id]: value }))
        onBlurHandler(e)
    }

    const submitBtn = (e) => {
        e.preventDefault()
        if (!emailRegex.test(forgotPswdForm.email)) {
            setForgotPswdFormValidation((prevState) => ({ ...prevState, email: !emailRegex.test(forgotPswdForm.email) }))
            return
        }
        forgotPswdService(forgotPswdForm.email).then(response => {
            console.log(response, 'success')
        }).catch(error => {
            console.log(error, 'error')
        })
    }

    const onBlurHandler = e => {
        const { id, value } = e.target
        if (id === 'email') {
            setForgotPswdFormValidation((prevState) => ({ ...prevState, email: !emailRegex.test(value) }))
        }
    }

    return (
        <div className="forgot-pswd-container">
            <Row className="justify-content-center">
                <Col xs={8} md={5} className="bg-white form-shadow p-4">
                    <Form>
                        <div className="text-left">
                            <h4>Forgot your password?</h4>
                            <p className="fz-14">Enter the email associated with your account and we’ll send you instructions to reset your password.</p>
                        </div>
                        <Form.Group className="mb-3 text-left" controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <MyCustomInput value={forgotPswdForm.email} onChangeHandler={onChangeHandler} type="email" placeholder="Enter your email" required={true} isInvalid={forgotPswdFormValidation.email} errorMsg={forgotPswdFormValidation.email ? 'Invalid email address.' : ''} onBlurHandler={onBlurHandler} />
                        </Form.Group>
                        <div className="justify-content-center pt-3">
                            <MyCustomButton text="Submit" clickHandler={submitBtn} myClass="form-btn" />
                        </div>
                    </Form>
                </Col>
            </Row>
        </div>
    );
}

export default Layout(ForgotPswd);