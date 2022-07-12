import React from 'react';
import "./Button.css";

const Button = ({ ...props }) => {
  return (
    <button style={{
      backgroundColor: props.backgroundColor,
      color: props.textColor,
      padding: props.padding,
      borderColor: props.backgroundColor,
      opacity: props.disabled ? 0.2 : 1
    }}
      {...props}
      className="button">
      {props.text}
    </button>
  )
}

export default Button;
