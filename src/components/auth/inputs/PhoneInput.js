import React from 'react';

export const PhoneInput = ({ errors, register }) => {
    return (
        <div className="field mt-5">
            <label className="label has-text-light">Teléfono</label>
            <div className="control has-icons-right">
                <input
                    autoComplete="off"
                    className={`input ${errors.phone && 'is-danger'}`}
                    name="phone"
                    placeholder="Ingresa un teléfono"
                    type="tel"
                    ref={
                        register({
                            required: {
                                value: true,
                                message: 'El campo teléfono no puede estar vacío.'
                            },
                            validate: {
                                noSpace: value => !value.includes(' ')
                            }
                        })
                    }
                />
                {
                    errors.phone
                    &&
                    <span className="icon is-small is-right">
                        <i className="fas fa-exclamation-triangle has-text-danger"></i>
                    </span>
                }
                <span className="has-text-danger is-size-7">
                    {errors?.phone?.message}
                    { errors.phone && errors.phone.type === 'noSpace' && 'Escribe el número sin espacios'}
                </span>
            </div>
        </div>
    )
}
