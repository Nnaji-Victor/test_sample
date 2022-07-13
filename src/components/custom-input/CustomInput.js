import React from "react";
import "./CustomInput.css";

const CustomInput = ({ handleChange, label, ...otherProps }) => {
    return (
        <>
            <div className='group'>
                <input 
                    className={!!otherProps.error ? 'form-input error-out' : 'form-input'}
                    onChange={handleChange} {...otherProps} />
                {label ? (
                    <label className='form-input-label'>
                        {label}
                    </label>
                ) : null}
            </div>
            {otherProps.error && <p className='error'>* {otherProps.error}</p>}
        </>
    );
};

export default CustomInput;
