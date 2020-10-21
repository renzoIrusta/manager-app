import React from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';

import { startLoginWithEmailPassword } from '../../actions/auth';

import { EmailInput } from './inputs/EmailInput';
import { PasswordInput } from './inputs/PasswordInput';

export const LoginForm = () => {

    const dispatch = useDispatch()
    const { register, errors, handleSubmit } = useForm();

    const onSubmit = ({email, password}, e) => {
        dispatch( startLoginWithEmailPassword( email, password ) )
        e.target.reset();
    }

    return (
        <form
            onSubmit={ handleSubmit(onSubmit) }
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
