import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router'

import Header from '../../components/Header'
import './index.scss'

function Layout(Component) {
    return withRouter((props) => {
        return <>
            <Header />
            <div className={`layout-container`}>
                <Component {...props} />
            </div>
        </>
    })
}

export default Layout;