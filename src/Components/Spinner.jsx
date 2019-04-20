import React from 'react';
import { Spin } from 'antd';

const Spinner = () => {
    return <div className="spinner-wrapper">
        <Spin size="large" />
    </div>
}

export default Spinner;