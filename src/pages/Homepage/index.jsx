import React from 'react';

import Layout from '../Layout';
import './index.scss'
import MyCustomButton from '../../components/MyCustomButton';
import { Card } from 'react-bootstrap';
import dashboardImg from '../../assets/imgs/dashboard.jpg'

function Homepage(props) {
    return (<>
        <div className="homepage-container d-flex justify-content-between">
            <div className="left-portion text-left pt-2">
                Welcome to
                <p className="bold-font m-0 line-height">
                    My<span className="blue m-0">Jobs</span>
                </p>
                <MyCustomButton text="Get Started" myClass="form-btn" />
            </div>
            <div className="right-portion text-right">
                <img src={dashboardImg} alt="interviewer-img" />
            </div>
        </div>
        <div className="bottom-section text-left">
            <h4 className="pb-4">Why Us</h4>
            <div className="d-flex justify-content-between pb-3">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title className="blue w-50">Get more visibility</Card.Title>
                        <Card.Text className="fz-14">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                            </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="text-left">
                    <Card.Body>
                        <Card.Title className="blue w-50">Organize your candidates</Card.Title>
                        <Card.Text className="fz-14">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                            </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="text-left">
                    <Card.Body>
                        <Card.Title className="blue w-50">Verify their abilities</Card.Title>
                        <Card.Text className="fz-14">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                            </Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <h4 className="pt-5">Companies who trust us</h4>
        </div>
    </>
    );
}

export default Layout(Homepage);