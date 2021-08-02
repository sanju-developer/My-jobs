import React, { useState, useEffect } from 'react';
import { Row, Col, Form, FloatingLabel } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { postJobFormConstant, postJobValidationFormConstant } from '../../utils/constant';
import MyCustomInput from '../../components/MyCustomInput';
import MyCustomButton from '../../components/MyCustomButton';
import Layout from '../Layout';
import { createJobAction, ClearPostJobDataAction } from '../../redux/actions/recruiter';
import Icons from '../../components/Icons';

function PostJob(props) {
    const { history } = props
    const [postJobForm, setPostJobForm] = useState(postJobFormConstant)
    const [postJobFormValidation, setPostJobFormValidation] = useState(postJobValidationFormConstant)
    const dispatch = useDispatch()
    const { isApiLoading, apiData } = useSelector((state) => state.createJob)
    const [allFieldsEmpty, setAllFieldsEmpty] = useState(false)

    useEffect(() => {
        return () => {
            dispatch(ClearPostJobDataAction())
        }
    }, [])

    useEffect(() => {
        if (apiData) {
            setPostJobForm(postJobFormConstant)
            setPostJobFormValidation(postJobValidationFormConstant)
            dispatch(ClearPostJobDataAction())
        }
    }, [apiData])

    const onChangeHandler = e => {
        const { id, value } = e.target
        setPostJobForm((prevState) => ({ ...prevState, [id]: value }))
        onBlurHandler(e)
    }

    const jobPost = (e) => {
        e.preventDefault()
        if (Object.values(postJobForm) ?.every(val => val.length === 0)) {
            setPostJobFormValidation({
                title: true,
                description: true,
                location: true
            })
            setAllFieldsEmpty(true)
            return
        } else setAllFieldsEmpty(false)
        if (Object.values(postJobForm) ?.every(val => val.length <= 3)) {
            setPostJobFormValidation({
                title: true,
                description: true,
                location: true
            })
            return
        }
        for (const key in postJobForm) {
            if (postJobForm.hasOwnProperty(key)) {
                if (postJobForm[key].length <= 3) {
                    setPostJobFormValidation((prevState) => ({ ...prevState, [key]: postJobForm[key].length <= 3 }))
                    return
                }
            }
        }

        const payload = {
            "title": postJobForm.title,
            "description": postJobForm.description,
            "location": postJobForm.location
        }
        dispatch(createJobAction(payload))
    }

    const onBlurHandler = e => {
        const { id, value } = e.target
        setPostJobFormValidation((prevState) => ({ ...prevState, [id]: value.length <= 3 }))
    }

    return (
        <>
            <div className="breadcrum white pb-4 d-flex align-items-center" onClick={() => history.push('/home')}><Icons type="Home" />&nbsp;Home > Post a Job</div>
            <div className="post-job-containe form-adjuster-post-job">
                <Row className="justify-content-center">
                    <Col xs={8} md={5} className="bg-white form-shadow p-4">
                        <h4 className="text-left mb-3">Post a Job</h4>
                        <Form>
                            <Form.Group className="mb-3 text-left" controlId="title">
                                <Form.Label>Job title*</Form.Label>
                                <MyCustomInput value={postJobForm.title} onChangeHandler={onChangeHandler} type="title" placeholder="Enter job title" required={true} isInvalid={postJobFormValidation.title} onBlurHandler={onBlurHandler} />
                                <Form.Text className="text-muted">
                                    Job title should be in 3 to 100 words
                            </Form.Text>
                            </Form.Group>
                            <div className="text-left">
                                <Form.Label >Description*</Form.Label>
                                <FloatingLabel controlId="description" label="description">
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Leave a comment here"
                                        style={{ height: '100px' }}
                                        value={postJobForm.description}
                                        isInvalid={postJobFormValidation.description}
                                        onChange={onChangeHandler}
                                        onBlur={onBlurHandler}
                                    />
                                    <Form.Text className="text-muted">
                                        Job description should be in 3 to 100 words
                            </Form.Text>
                                </FloatingLabel>
                            </div>
                            <Form.Group className="mb-3 mt-3 text-left" controlId="location">
                                <Form.Label>Location*</Form.Label>
                                <MyCustomInput value={postJobForm.location} onChangeHandler={onChangeHandler} type="location" placeholder="Enter location" required={true} isInvalid={postJobFormValidation.location} onBlurHandler={onBlurHandler} />
                                <Form.Text className="text-muted">
                                    Location should be in 3 to 100 words
                            </Form.Text>
                            </Form.Group>
                            {allFieldsEmpty && <p className="text-danger text-right">All fields are mandatory.</p>}
                            <div className="justify-content-center">
                                <MyCustomButton text="Post" myClass="form-btn" clickHandler={jobPost} isLoading={isApiLoading} />
                            </div>
                        </Form>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Layout(PostJob);