import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { startRegisterWithEmailPassword } from '../../actions/auth';

import { EmailInput } from './EmailInput';
import { PasswordInput } from './PasswordInput';

export const RegisterForm = () => {

    const dispatch = useDispatch()
    const { register, errors, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        // console.log(data);
        dispatch( startRegisterWithEmailPassword( data.email, data.password ) )
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
