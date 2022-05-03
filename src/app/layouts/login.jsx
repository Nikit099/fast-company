import React, { useEffect, useState } from "react";
import TextField from "../components/textField";
import { validator } from "../utils/validator";
function Login() {
    const [data, setData] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});
    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    const validatorConfig = {
        email: {
            isRequired: {
                message: "поле email обязательно для заполнения"
            },
            isEmail: {
                message: "Email введен не верно"
            }
        },
        password: {
            isRequired: {
                message: "поле password обязательно для заполнения"
            },
            isCapitalSymbol: {
                message: "Password должен содержать хотя бы одну большую букву"
            },
            isContainDigit: {
                message: "Password должен содержать хотя бы одну цифру"
            },
            min: {
                message: "Password должен состоять минимум из 8 символов",
                value: 8
            }
        }
    };
    useEffect(() => {
        validate();
    }, [data]);
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValidate = validate();
        if (!isValidate) return;
        console.log(data);
    };
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    <h3 className="mb-4">Login</h3>
        <form onSubmit={handleSubmit}>
            <TextField
                lable="Email"
                name="email"
                value={data.email}
                onChange={handleChange}
                error={errors.email}
            />
            <TextField
                lable="Password"
                name="password"
                value={data.password}
                type="password"
                onChange={handleChange}
                error={errors.password}
            />
            <button disabled={!isValid} className="btn btn-primary w-100 mx">Submit</button>
        </form></div></div></div>
    );
}

export default Login;
