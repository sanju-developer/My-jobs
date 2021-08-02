import React from 'react';
import { toast } from 'react-toastify';

import { toastType } from '../../utils/constant';

function CustomToast(type) {
    const showToast = () => {
        switch (type) {
            case toastType.LOGIN_SUCCESSFULLY:
                return toast(<div className="text-left">
                    <h2 className="blue">Login</h2>
                    <p className="fx-14 success">You have successfully logged in.</p></div>, {
                    toastId: 'logout'
                });
        }
    }

    return (
        showToast()
    );
}

export default CustomToast;