import React from 'react'

export const PasswordInput = ({ errors, register }) => {
    return (
        <>
            <div className="field mt-5">
                <label className="label has-text-light">Contraseña</label>
                <div className="control has-icons-right">
                    <input
                        autoComplete="off"
                        className={`input ${errors.password && 'is-danger'}`}
                        name="password"
                        placeholder="Ingresa tu contraseña"
                        type="password"
                        ref={
                            register({
                                required: {
                                    value: true,
                                    message: 'El campo password no puede estar vacío.'
                                },
                                minLength: {
                                    value: 8,
                                    message: 'La contraseña no puede tener menos de 8 caracteres.'
                                }
                            })
                        }
                    />
                    {
                        errors.password
                        &&
                        <span class="icon is-small is-right">
                            <i class="fas fa-exclamation-triangle has-text-danger"></i>
                        </span>
                    }
                    <span className="has-text-danger is-size-7">
                        {errors?.password?.message}
                    </span>
                </div>
            </div>
        </>
    )
}
