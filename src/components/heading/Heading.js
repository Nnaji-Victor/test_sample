import React from 'react';
import './Heading.css';

const Heading = (props) => {
    return (
        <div style={{ backgroundColor: props.backgroundColor }} className="header-background">
            <div style={{ color: props.textColor }} className="title">{props.title}</div>
        </div>
    )
}

export default Heading;