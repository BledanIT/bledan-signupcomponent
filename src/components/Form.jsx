import { useState } from "react";
import { RiErrorWarningFill } from "react-icons/ri";

const Form = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const datas = [
        {
            name: 'firstname',
            type: 'text',
            placeholder: 'First Name',
        },
        {
            name: 'lastname',
            type: 'text',
            placeholder: 'Last Name',
        },
        {
            name: 'email',
            type: 'email',
            placeholder: 'Email',
        },
        {
            name: 'password',
            type: 'password',
            placeholder: 'Password',
        },
    ]
    const inputStyle = 'border rounded-md pl-4 py-3 w-full';
    const errorStyle = 'font-medium text-highlightCol text-2xs italic';

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm(formData);
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            // Form submission logic here
            console.log('Form submitted successfully!');
            console.log(formData);
        } else {
            console.log('Form submission failed due to validation errors.');
        }
    }

    const validateForm = (data) => {
        const errors = {};

        if (!data.firstname.trim()) {
            errors.firstname = 'First Name cannot be empty';
        }

        if (!data.lastname.trim()) {
            errors.lastname = 'Last Name cannot be empty';
        }

        if (!data.email.trim()) {
            errors.email = 'Email cannot be empty';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = 'Looks like this is not an email';
        }

        if (!data.password) {
            errors.password = 'Password cannot be empty';
        }

        return errors;
    };

    return (
        <form onSubmit = {handleSubmit} className = 'flex flex-col gap-4 md:gap-8 md:p-8 bg-white rounded-lg shadow-divs shadow-shadowCol p-5'>
            <section role = 'inputs' className = 'flex flex-col gap-4 md:gap-8'>
            {datas.map((data, index) => {
                return (
                    <div key = {index} className = 'relative'>
                        <input onChange = {handleChange} type = {data.type} name = {data.name} value = {formData[{index}]} placeholder = {data.placeholder} className={`${inputStyle} ${errors[`${data.name}`] ? 'border-highlightCol' : 'border-textCol2'}`}></input>
                        {errors[`${data.name}`] && <RiErrorWarningFill className = 'text-highlightCol absolute top-4 right-4' />}
                        {errors[`${data.name}`] && (<p className = {`${errorStyle}`}>{errors[`${data.name}`]}</p>)}
                    </div>
                )
            })}
            </section>
            <button type = 'submit' className = 'bg-submitCol rounded-md py-3 md:py-4 pb-4 w-full text-white font-semibold uppercase tracking-wider shadow-insetDivs linear-ease duration-150 hover:opacity-80 active:scale-90'>Claim your free trial</button>

            <p className = 'text-2xs text-center text-textCol2 leading-5 px-4 md:-mt-4'>By clicking the button, you are agreeing to our <a href = '#' className = 'text-highlightCol font-semibold'>Terms and Services</a></p>
        </form>
    )
}

export default Form