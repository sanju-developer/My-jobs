import React from 'react'
import { Card, Col } from 'react-bootstrap'
import MyCustomButton from '../../components/MyCustomButton'
import Icons from '../../components/Icons'

function PostedJobs(props) {
    const { viewApps, jobs } = props
    return (
        jobs ?.length !== 0 && jobs ?.map(jb =>
            <Col key={jb.id} md={4} xs={12} sm={12}>
                <Card className="d-flex flex-nowrap m-2" style={{ width: '18rem' }}>
                    <Card.Body className="text-left">
                        <Card.Title className="job-title">{jb.title}</Card.Title>
                        <Card.Text className="job-description">
                            {jb.description}
                        </Card.Text>
                        <div className="align-items-baseline d-flex justify-content-between w-100">
                            <div><Icons type="Location" />&nbsp;<span>Bengaluru</span></div>
                            <MyCustomButton myClass="view-app-btn" text="View applications" clickHandler={() => viewApps(jb.id)} />
                        </div>
                    </Card.Body>
                </Card>
            </Col >
        )
    );
}

export default PostedJobs;