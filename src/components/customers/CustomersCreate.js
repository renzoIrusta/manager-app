import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { customerCreate } from '../../actions/customers';
import { fireSwal } from '../../helpers/fireSwal';
import { EmailInput } from '../auth/inputs/EmailInput';
import { FileInput } from '../auth/inputs/FileInput';
import { PhoneInput } from '../auth/inputs/PhoneInput';

import { TextInput } from '../auth/inputs/TextInput';

export const CustomersCreate = () => {

    const dispatch = useDispatch();
    const { register, errors, handleSubmit } = useForm();

    const [file, setFile] = useState(undefined);

    const handleChange = (e) => {
        if (e.target.files[0]){
            setFile(e.target.files[0])
        }
    }

    const onSubmit = ( data ) => {
        const dataLower = {
            ...data,
            firstName: data.firstName.toLowerCase(),
            lastName: data.lastName.toLowerCase()
        }
        fireSwal( file );
        dispatch( customerCreate( dataLower, file ) );
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="auth__form mb-6"
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
            <EmailInput
                errors={errors}
                register={register}
            />
            <PhoneInput
                errors={errors}
                register={register}
            />
            <FileInput 
                errors={errors}
                register={register}
                handleChange={handleChange}
                fileName={ file ? file.name : 'Image'}
            />
            <div className="field mt-6">
                <div className="control">
                    <button
                        className="button is-link is-fullwidth is-outlined"
                        disabled={
                            (errors.firstName) ? true : 
                            (errors.lastName) ? true:
                            (errors.email) ? true :
                            (errors.phone) ? true : false
                        }
                    >
                        Crear cliente
                    </button>
                </div>
            </div>
        </form>
    )
}
