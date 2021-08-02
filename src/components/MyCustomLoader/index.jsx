import React from 'react';
import { Spinner } from 'react-bootstrap';

function MyCustomLoader(props) {
    return (
        <Spinner animation="border" role="status" variant="secondary">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    );
}

export default MyCustomLoader;