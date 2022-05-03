import React, { useState } from "react";
import PropTypes from "prop-types";

function TextField({ type, name, lable, value, onChange, error }) {
    const [showPassword, setShowPassword] = useState(false);
    const getInputClasses = () => {
        return "form-control" + (error ? " is-invalid" : "");
    };
    const toggleShowPassword = () => {
        setShowPassword(prevState => !prevState);
    };
    return (
        <div className="mb-4">
                <label htmlFor={name}> {lable} </label>
                <div className="input-group has-validation">
                <input
                    type={showPassword ? "text" : type}
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className={getInputClasses()}
                />
                {type === "password" &&
               (<button className="btn btn-outline-secondary" type="button" onClick={toggleShowPassword} >
                <i className={"bi bi-eye" + (showPassword ? "-slash" : "") } ></i>
                </button>)}
            {error && <div className="invalid-feedback">{error}</div>}
            </div>
        </div>
    );
}
TextField.defaultProps = {
    type: "text"
};
TextField.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func
};
export default TextField;
