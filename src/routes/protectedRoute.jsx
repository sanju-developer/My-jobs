import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getAccessToken } from '../utils/storage';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={
            props => {
                if (getAccessToken()) {
                    return <Component {...rest} {...props} />
                } else {
                    return <Redirect to={
                        {
                            pathname: '/',
                            state: {
                                from: props.location
                            }
                        }
                    } />
                }
            }
        } />
    )
}

export default ProtectedRoute;