import React from 'react'

export const TextArea = ({ label, errors, register, textColor, value, handleInputChange }) => {
    return (
        <div className="field mt-5">
            <label className={`label ${textColor || 'has-text-light'}`}>{label}</label>
            <div className="control has-icons-right">
                <textarea
                    autoComplete="off"
                    className={`textarea has-fixed-size ${errors.textarea && 'is-danger'}`}
                    name="textarea"
                    placeholder={`Ingresa ${label.toLowerCase()}`}
                    defaultValue={ value }
                    ref={
                        register({
                            required: {
                                value: true,
                                message: `El campo ${label.toLowerCase()} no puede estar vacío`
                            }
                        })
                    }
                ></textarea>
                {
                    errors.textarea
                    &&
                    <span className="icon is-small is-right">
                        <i className="fas fa-exclamation-triangle has-text-danger"></i>
                    </span>
                }
                <span className="has-text-danger is-size-7">
                    {errors?.textarea?.message}
                </span>
            </div>
        </div>
    )
}
