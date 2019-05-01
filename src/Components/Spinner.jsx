import React from 'react';
import { Spin } from 'antd';

const Spinner = () => {
    return <div className="spinner-wrapper">
        <Spin size="large" />
        {/* <img src={require("./../images/loader.gif")} /> */}
    </div>
}

export default Spinner;