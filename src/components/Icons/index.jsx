import React from 'react';

import { GoLocation } from 'react-icons/go';
import { AiFillHome } from 'react-icons/ai';

function Icons(props) {
    const { type } = props

    const ShowIcon = () => {
        switch (type) {
            case 'Location':
                return <GoLocation />
            case 'Home':
                return <AiFillHome />
            default: return null
        }
    }

    return (
        ShowIcon()
    );
}

export default Icons;