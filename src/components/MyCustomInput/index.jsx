import React from 'react';
import { Form } from 'react-bootstrap';

function MyCustomInput(props) {
    const { type, placeholder, isRequired, isInvalid, errorMsg, value, onChangeHandler, onBlurHandler } = props
    return (
        <>
            <Form.Control onBlur={onBlurHandler} value={value} type={type} placeholder={placeholder} required={isRequired} isInvalid={isInvalid} onChange={onChangeHandler} />
            <Form.Control.Feedback type="invalid" className="d-flex flex-row-reverse">
                {errorMsg}
            </Form.Control.Feedback>
        </>
    );
}

export default MyCustomInput;