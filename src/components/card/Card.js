import React from 'react';
import './Card.css';

const Card = ({ children, ...props }) => {
    return (
        <div style={{ backgroundColor: props.backgroundColor }} className="card-background">
            {children}
        </div>
    )
}

export default Card;