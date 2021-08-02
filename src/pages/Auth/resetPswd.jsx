import React, { useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import MyCustomInput from '../../components/MyCustomInput';
import MyCustomButton from '../../components/MyCustomButton';
import { resetPswdFormConstant, resetPswdFormValidationConstant } from '../../utils/constant';
import Layout from '../Layout';
import './auth.scss'

function ResetPswd() {
    const [isPswdSame, setIsPswdSame] = useState(false)
    const [resetPswdForm, setResetPswdForm] = useState(resetPswdFormConstant)
    const [resetPswdFormValidation, setResetPswdFormValidation] = useState(resetPswdFormValidationConstant)

    const onChangeHandler = e => {
        const { id, value } = e.target
        setResetPswdForm((prevState) => ({ ...prevState, [id]: value }))
        onBlurHandler(e)
    }

    const resetBtn = (e) => {
        e.preventDefault()
        for (const key in resetPswdForm) {
            if (resetPswdForm.hasOwnProperty(key)) {
                if (resetPswdForm[key].length === 0) {
                    setResetPswdFormValidation((prevState) => ({ ...prevState, [key]: resetPswdForm[key].length === 0 }))
                    return
                }
            }
        }

        if (resetPswdForm.password !== resetPswdForm.confirmPassword) {
            setIsPswdSame(true)
            return
        } else if (resetPswdForm.password === resetPswdForm.confirmPassword) {
            setIsPswdSame(false)
        }
    }

    const onBlurHandler = e => {
        const { id, value } = e.target
        setResetPswdFormValidation((prevState) => ({ ...prevState, [id]: value.length === 0 }))
    }

    return (
        <div className="reset-pswd-container">
            <Row className="justify-content-center">
                <Col xs={8} md={5} className="bg-white form-shadow p-4">
                    <Form>
                        <div className="text-left">
                            <h4>Reset Your Password</h4>
                            <p className="fz-14">Enter your new password below.</p>
                        </div>
                        <Form.Group className="mb-3 text-left" controlId="password">
                            <Form.Label>New password</Form.Label>
                            <MyCustomInput value={resetPswdForm.password} onChangeHandler={onChangeHandler} type="password" placeholder="Enter your password" required={true} isInvalid={resetPswdFormValidation.password} errorMsg={resetPswdFormValidation.password ? 'Please enter your password' : ''} onBlurHandler={onBlurHandler} />
                        </Form.Group>

                        <Form.Group className="mb-3 text-left" controlId="confirmPassword">
                            <div className="d-flex justify-content-between">
                                <Form.Label>Confirm new password</Form.Label>
                            </div>
                            <MyCustomInput value={resetPswdForm.confirmPassword} onChangeHandler={onChangeHandler} type="password" placeholder="Enter your new password" required={true} isInvalid={resetPswdFormValidation.confirmPassword} errorMsg={resetPswdFormValidation.confirmPassword ? 'Please enter your new password' : ''} />
                        </Form.Group>
                        {isPswdSame && <p>Your password not matched.</p>}
                        <div className="justify-content-center pt-3">
                            <MyCustomButton text="Reset" clickHandler={resetBtn} myClass="form-btn" />
                        </div>
                    </Form>
                </Col>
            </Row>
        </div>
    );
}

export default Layout(ResetPswd);