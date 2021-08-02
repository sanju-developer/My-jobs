import React from 'react';
import { withRouter } from "react-router";
import { Container, Dropdown } from 'react-bootstrap';
import { toast } from 'react-toastify';

import MyCustomButton from '../MyCustomButton';
import { getAccessToken, clearLS } from '../../utils/storage';
import './index.scss'

function Header(props) {
    const { history } = props

    const loginSingupHandler = () => {
        history.push('/login')
    }

    const logout = () => {
        toast(<div className="text-left">
            <h2 className="blue">Logout</h2>
            <p className="fx-14">You have successfully logged out.</p></div>, {
            toastId: 'logout'
        });
        clearLS()
        history.push('/')
    }

    const postAJob = () => {
        history.push('/home/post-job')
    }

    return (
        <header>
            <Container className="d-flex justify-content-between p-3 header-container">
                <div className="curser-pointer" onClick={() => getAccessToken() ? history.push('/home') : history.push('/')}>
                    <span className="my">My</span>
                    <span className="jobs">Jobs</span>
                </div>
                <div className="right-portion">
                    {!getAccessToken() ? <MyCustomButton text="Login/Signup" myClass="header-btn" clickHandler={loginSingupHandler} /> :
                        <div className="logout-section d-flex">
                            <span className="post-job white" onClick={postAJob}>Post a job</span>
                            <div className="name-initiator p-1">
                                p
                            </div>
                            <Dropdown>
                                <Dropdown.Toggle variant="light" id="dropdown-basic"></Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    }
                </div>
            </Container>
        </header>
    );
}

export default withRouter(Header);