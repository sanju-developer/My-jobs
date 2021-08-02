import React from 'react';
import { Spinner } from 'react-bootstrap';

function MyCustomButton(props) {
    const { myClass, clickHandler, text, isLoading } = props
    return (
        <button className={myClass} onClick={clickHandler} disabled={isLoading}>
            {text}&nbsp;
            {isLoading && <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
            />}
        </button>
    );
}

export default MyCustomButton;