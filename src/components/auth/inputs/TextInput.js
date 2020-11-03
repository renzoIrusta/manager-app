import React from 'react';

export const TextInput = ({ name, label, errors, register, textColor }) => {
    return (
        <div className="field mt-5">
                <label className={`label ${ textColor || 'has-text-light'}`}>{label}</label>
                <div className="control has-icons-right">
                    <input
                        autoComplete="off"
                        className={`input ${errors[name] && 'is-danger'}`}
                        name={name}
                        placeholder={ `Ingresa tu ${label.toLowerCase()}` }
                        type="text"
                        ref={
                            register({
                                required: {
                                    value: true,
                                    message: `El campo ${label.toLowerCase()} no puede estar vacío`
                                }
                            })
                        }
                    />
                    {
                        errors[name]
                        &&
                        <span className="icon is-small is-right">
                            <i className="fas fa-exclamation-triangle has-text-danger"></i>
                        </span>
                    }
                    <span className="has-text-danger is-size-7">
                        {errors?.[name]?.message}
                    </span>
                </div>
            </div>  
    )
}
