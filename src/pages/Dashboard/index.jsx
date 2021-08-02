import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import Layout from '../Layout';
import MyCustomButton from '../../components/MyCustomButton';
import PostedJobs from '../Homepage/postedJobs';
import ViewApplications from '../../components/Modals/viewApplications'
import { GetAllJobsAction, GetAllJobsApplicationsAction } from '../../redux/actions/recruiter'
import CustomPagination from '../../components/CustomPagination'
import MyCustomLoader from '../../components/MyCustomLoader';
import './index.scss'
import { Row } from 'react-bootstrap';
import Icons from '../../components/Icons';

function Dashboard() {
    const dispatch = useDispatch()
    const history = useHistory()
    const [showApps, setShowApps] = useState(false)
    const [activePage, setActivePage] = useState(1)
    const { isApiLoading, apiData } = useSelector((state) => state.jobs)

    useEffect(() => {
        dispatch(GetAllJobsAction())
    }, [])

    const PostJob = () => {
        history.push('/home/post-job')
    }

    const viewApps = (id) => {
        dispatch(GetAllJobsApplicationsAction(id))
        setShowApps(true)
    }

    const onChangeHandler = (pageNumber) => {
        setActivePage(pageNumber)
        dispatch(GetAllJobsAction(10, pageNumber * 10))
    }

    return (
        <div className="dashboard-container text-left">
            <div className="breadcrum white pb-4 d-flex align-items-center" onClick={() => history.push('/home')}><Icons type="Home" />&nbsp;Home</div>
            <h2 className="white">Jobs posted by you</h2>
            {isApiLoading ? <div className="my-loader d-flex justify-content-center p-4"> <MyCustomLoader /> </div> :
                <>
                    {apiData && apiData ?.data && apiData ?.data ?.length !== 0 ? <>
                        <div className="posted-job-container d-flex pb-2">
                            <Row className="w-100">
                                <PostedJobs viewApps={viewApps} jobs={apiData ?.data ?.data} />
                            </Row>
                        </div>
                        <div className="d-flex justify-content-center m-4">
                            {apiData ?.data ?.metadata ?.count >= 10 && <CustomPagination activePage={activePage} totalPage={apiData ?.data ?.metadata ?.count} onChangeHandler={onChangeHandler} />}
                        </div>
                    </>
                        :
                        <div className="no-job-posted-container text-center">
                            <p className="mb-4">Your posted jobs will show here!</p>
                            <MyCustomButton text="Post a job" myClass="form-btn" clickHandler={PostJob} />
                        </div>
                    }
                </>
            }
            {showApps && <ViewApplications handleClose={() => setShowApps(false)} />}
        </div>
    );
}

export default Layout(Dashboard);