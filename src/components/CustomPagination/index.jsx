import React from 'react';
import Pagination from "react-js-pagination";

import './index.scss'
// import "bootstrap/less/bootstrap.less";

function CustomPagination(props) {
    const { totalPage, onChangeHandler, activePage } = props
    return (
        <Pagination
            activePage={activePage}
            itemsCountPerPage={10}
            totalItemsCount={totalPage}
            // pageRangeDisplayed={5}
            onChange={onChangeHandler}
        />
    );
}

export default CustomPagination;