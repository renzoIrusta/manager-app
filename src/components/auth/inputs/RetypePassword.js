import React from 'react'

export const RetypePassword = ({ errors, register, data }) => {
    return (
        <div className="field mt-5">
                <label className="label has-text-light">Confirma la contraseña</label>
                <div className="control has-icons-right">
                    <input
                        autoComplete="off"
                        className={`input ${errors.retypePassword && 'is-danger'}`}
                        name="retypePassword"
                        placeholder="Vuelve a ingresar tu contraseña"
                        type="password"
                        ref={
                            register({
                                required: {
                                    value: true,
                                    message: 'El campo vuelve a ingresar tu password no puede estar vacío.'
                                },
                                minLength: {
                                    value: 8,
                                    message: 'La contraseña no puede tener menos de 8 caracteres.'
                                },
                                validate: {
                                    areEquals: value => value === data
                                }
                            })
                        }
                    />
                    {
                        errors.retypePassword
                        &&
                        <span className="icon is-small is-right">
                            <i className="fas fa-exclamation-triangle has-text-danger"></i>
                        </span>
                    }
                    <span className="has-text-danger is-size-7">
                        {errors?.retypePassword?.message}
                        { errors.retypePassword && errors.retypePassword.type === 'areEquals' && 'Las contraseñas no coinciden'}
                    </span>
                </div>
            </div>
    )
}
