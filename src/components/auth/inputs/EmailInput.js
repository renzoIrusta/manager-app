import React from 'react';

export const EmailInput = ({ errors, register }) => {
    return (

          <div className="field mt-5">
                <label className="label has-text-light">Email</label>
                <div className="control has-icons-right">
                    <input
                        autoComplete="off"
                        className={`input ${errors.email && 'is-danger'}`}
                        name="email"
                        placeholder="Ingresa tu email"
                        type="email"
                        ref={
                            register({
                                required: {
                                    value: true,
                                    message: 'El campo email no puede estar vacío.'
                                },
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'El email ingresado es inválido'
                                }
                            })
                        }
                    />
                    {
                        errors.email
                        &&
                        <span className="icon is-small is-right">
                            <i className="fas fa-exclamation-triangle has-text-danger"></i>
                        </span>
                    }
                    <span className="has-text-danger is-size-7">
                        {errors?.email?.message}
                    </span>
                </div>
            </div>  
    )
}
