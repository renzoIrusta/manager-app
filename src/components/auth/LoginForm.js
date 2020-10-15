import React from 'react';
import { useForm } from "react-hook-form";
import { EmailInput } from './EmailInput';
import { PasswordInput } from './PasswordInput';

export const LoginForm = () => {

    const { register, errors, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        console.log(data)
        e.target.reset();
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="auth__form"
        >
            <EmailInput
                errors={errors}
                register={register}
            />
            <PasswordInput
                errors={errors}
                register={register}
            />
            <div className="field mt-6">
                <div className="control">
                    <button
                        className="button is-link is-fullwidth is-outlined"
                        disabled={(errors.email) ? true : (errors.password) ? true : false}
                    >
                        Ingresar
                    </button>
                </div>
            </div>

        </form>
    )
}
