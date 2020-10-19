import React, {useState} from 'react';

import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { startRegisterWithEmailPassword } from '../../actions/auth';
import { ColorPicker } from './inputs/ColorPicker';

import { EmailInput } from './inputs/EmailInput';
import { PasswordInput } from './inputs/PasswordInput';
import { RetypePassword } from './inputs/RetypePassword';
import { TextInput } from './inputs/TextInput';

export const RegisterForm = () => {

    const dispatch = useDispatch();

    const [passwordState, setPasswordState] = useState("")

    const { register, errors, handleSubmit } = useForm();

    const onSubmit = ( data, e) => {
        dispatch( startRegisterWithEmailPassword( data ) )
        e.target.reset();
    }

    

    const handlePassword = (e) => {
        setPasswordState( e.target.value )
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="auth__form my-6"
        >
            <TextInput
                errors={errors}
                register={register}
                name="firstName"
                label="Nombre"
            />
            <TextInput
                errors={errors}
                register={register}
                name="lastName"
                label="Apellido"
            />
            <ColorPicker
                errors={errors}
                register={register}
            />
            <EmailInput
                errors={errors}
                register={register}
            />
            <PasswordInput
                errors={errors}
                register={register}
                handlePassword={ handlePassword }
            />
            <RetypePassword
                errors={ errors }
                register={ register }
                data={ passwordState }
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
