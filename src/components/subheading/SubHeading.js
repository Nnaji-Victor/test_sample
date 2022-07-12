import React from 'react';
import './SubHeading.css';

const SubHeading = (props) => {
    return (
        <div style={{ backgroundColor: props.backgroundColor }} className="sub-header-background">
            <div style={{ color: props.textColor }} className="title">{props.title}</div>
        </div>
    )
}

export default SubHeading;