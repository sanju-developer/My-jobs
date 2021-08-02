import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Homepage from '../pages/Homepage';
import Login from '../pages/Auth/login';
import Register from '../pages/Auth/register';
import ResetPswd from '../pages/Auth/resetPswd';
import ForgotPswd from '../pages/Auth/forgotPswd';
import ProtectedRoute from './protectedRoute';
import Dashboard from '../pages/Dashboard';
import { getAccessToken } from '../utils/storage'
import PostJob from '../pages/PostJob';

export default function Routing() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Homepage />
                </Route>
                <Route exact path="/">
                    <Homepage />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/register">
                    <Register />
                </Route>
                <Route exact path="/reset-password">
                    <ResetPswd />
                </Route>
                <Route exact path="/forgot-password">
                    <ForgotPswd />
                </Route>
                <ProtectedRoute exact component={Dashboard} path="/home" />
                <ProtectedRoute exact component={PostJob} path="/home/post-job" />
            </Switch>
        </Router>
    );
}
