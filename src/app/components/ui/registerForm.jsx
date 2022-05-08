import React, { useEffect, useState } from "react";
import TextField from "../common/form/textField";
import { validator } from "../../utils/validator";
import API from "../../api";
import SelectField from "../common/form/selectField";
import RadioField from "../common/form/radioField";
import MultiSelectField from "../common/form/multiSelectField";
import CheckBoxField from "../common/form/checkBoxField";
function RegisterForm() {
    const [data, setData] = useState({
        email: "",
        password: "",
        profession: "",
        sex: "male",
        qualities: [],
        licence: false
    });
    const [qualities, setQualities] = useState([]);
    const [errors, setErrors] = useState({});
    const [professions, setProfession] = useState();
    const handleChange = (target) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    useEffect(() => {
        API.professions.fetchAll().then((data) => {
            const professionsList = Object.keys(data).map((professionName) => ({
                label: data[professionName].name,
                value: data[professionName]._id
            }));
            setProfession(professionsList);
        });
        API.qualities.fetchAll().then((data) => {
            const qualitiesList = Object.keys(data).map((optionName) => ({
                label: data[optionName].name,
                value: data[optionName]._id,
                color: data[optionName].color
            }));
            setQualities(qualitiesList);
        });
    }, []);
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
        },
        profession: {
            isRequired: {
                message: "Обязательно выберите вашу профессию"
            }
        },
        licence: {
            isRequired: {
                message:
                    "Невозможно использовать севис без подтверждения соглашения"
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
    const getProfessionById = (id) => {
        for (const prof of professions) {
            if (prof.value === id) {
                return { _id: prof.value, name: prof.label };
            }
        }
    };
    const getQualities = (elements) => {
        const qualitiesArray = [];
        for (const elem of elements) {
            for (const quality in qualities) {
                if (elem.value === qualities[quality].value) {
                    qualitiesArray.push({
                        _id: qualities[quality].value,
                        name: qualities[quality].label,
                        color: qualities[quality].color
                    });
                }
            }
        }
        return qualitiesArray;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        const { profession, qualities } = data;
        console.log({
            ...data,
            profession: getProfessionById(profession),
            qualities: getQualities(qualities)
        });
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
            <SelectField
                options={professions}
                defaultOption="Choose..."
                error={errors.profession}
                value={data.profession}
                onChange={handleChange}
                lable="Выбери свою профессию"
                name="profession"
            />
            <RadioField
                options={[
                    { name: "Male", value: "male" },
                    { name: "Female", value: "female" },
                    { name: "Other", value: "other" }
                ]}
                value={data.sex}
                name="sex"
                onChange={handleChange}
                label="Выберите ваш пол"
            />
            <MultiSelectField
                options={qualities}
                onChange={handleChange}
                name="qualities"
                label="Выберите ваши качества"
                defaultValue={data.qualities}
            />
            <CheckBoxField
                value={data.licence}
                onChange={handleChange}
                name="licence"
                error={errors.licence}
            >
                Подтвердить <a>лицензионное соглашение</a>
            </CheckBoxField>
            <button
                type="submit"
                disabled={!isValid}
                className="btn btn-primary w-100 mx"
            >
                Submit
            </button>
        </form>
    );
}

export default RegisterForm;
