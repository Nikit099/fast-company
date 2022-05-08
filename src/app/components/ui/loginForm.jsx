import React, { useEffect, useState } from "react";
import TextField from "../common/form/textField";
import { validator } from "../../utils/validator";
import CheckBoxField from "../common/form/checkBoxField";
// import * as yup from "yup";
function LoginForm() {
    const [data, setData] = useState({
        email: "",
        password: "",
        stayOn: false
    });
    const [errors, setErrors] = useState({});
    const handleChange = (target) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    // const validateScheme = yup.object().shape({
    //     password: yup
    //         .string()
    //         .required("поле password обязательно для заполнения")
    //         .matches(
    //             /(?=.*[A-Z])/,
    //             "Password должен содержать хотя бы одну большую букву"
    //         )
    //         .matches(
    //             /(?=.*[0-9])/,
    //             "Password должен содержать хотя бы одну цифру"
    //         )
    //         .matches(
    //             /(?=.*[!@#$%&*])/,
    //             "Password должен содержать минимум один из специальных символов !@#$%&*"
    //         )
    //         .matches(
    //             /(?=.{8,})/,
    //             "Password должен состоять минимум из 8 символов"
    //         ),
    //         email: yup
    //         .string()
    //         .required("поле email обязательно для заполнения")
    //         .email("Email введен не верно")
    // });
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
        // validateScheme
        //     .validate(data)
        //     .then(() => setErrors({}))
        //     .catch((err) => setErrors({ [err.path]: err.message }));
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
            <CheckBoxField
                value={data.stayOn}
                onChange={handleChange}
                name="stayOn"
            >
                Оставаться в системе
            </CheckBoxField>
            <button disabled={!isValid} className="btn btn-primary w-100 mx">
                Submit
            </button>
        </form>
    );
}

export default LoginForm;
