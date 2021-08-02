import React from 'react';
import { Modal, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import MyCustomLoader from '../MyCustomLoader';
import './index.scss'
import { dummyApplicants } from '../../utils/constant';

function ViewApplications(props) {
    const { handleClose } = props

    const { isApiLoading, apiData } = useSelector((state) => state.applicants)

    return (
        <Modal size="lg" show={true} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Applicants for this job</Modal.Title>
            </Modal.Header>
            {isApiLoading ? <div className="loading-section"> <MyCustomLoader /> </div> :
                dummyApplicants && <Modal.Body className={`${!dummyApplicants ? 'no-data' : ''}`}>
                    Total 35 applications
                {dummyApplicants ? <div className="body-content d-flex flex-wrap justify-content-around p-2">
                        {dummyApplicants ?.map(app => <Card className="m-2" key={app.id} style={{ width: '18rem' }}>
                            <Card.Body>
                                <div className="applicant-detail-top d-flex pb-4">
                                    <div className="name-initiator mr-4">{app.name.charAt(0)}</div>
                                    <div>
                                        <Card.Title>{app.name}</Card.Title>
                                        <p className="fz-14">{app.email}</p>
                                    </div>
                                </div>
                                <Card.Text>
                                    <p className="m-0 heading">Skills</p>
                                    <p className="skills">{app.skills}</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>)}
                    </div> : <div className="no-applicants-container">No applications available!</div>}</Modal.Body>
            }
        </Modal>
    );
}

export default ViewApplications;