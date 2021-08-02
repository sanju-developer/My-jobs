import { combineReducers } from 'redux';

import { RegisterReducer } from './AuthReducer/registerReducer';
import { LoginReducer } from './AuthReducer/loginReducer';
import { JobsReducer } from './recruiter/jobsReducer';
import { ApplicantsReducer } from './recruiter/applicantsReducer'
import { CreateJobsReducer } from './recruiter/createJob';

const rootReducer = combineReducers({
    register: RegisterReducer,
    login: LoginReducer,
    jobs: JobsReducer,
    applicants: ApplicantsReducer,
    createJob: CreateJobsReducer
});

export default rootReducer;