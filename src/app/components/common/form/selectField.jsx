import React from "react";
import PropTypes from "prop-types";

function SelectField({
    lable,
    value,
    onChange,
    options,
    defaultOption,
    error,
    name
}) {
    const getInputClasses = () => {
        return "form-select" + (error ? " is-invalid" : "");
    };
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };
    const optionsArray =
        !Array.isArray(options) && typeof options === "object"
            ? Object.values(options)
            : options;
    return (
        <div className="mb-4 ">
            <label htmlFor={name} className="form-label">
                {lable}
            </label>

            <select
                value={value}
                name={name}
                onChange={handleChange}
                className={getInputClasses()}
                id="validationCustom04"
                required
            >
                <option disabled value="">
                    {defaultOption}
                </option>
                {optionsArray &&
                    optionsArray.map((option) => (
                        <option value={option.value} key={option.value}>
                            {option.label}
                        </option>
                    ))}
            </select>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
}
SelectField.propTypes = {
    defaultOption: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func,
    options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    name: PropTypes.string
};
export default SelectField;
