import React from 'react';

export const ColorPicker = ({ errors, register }) => {
    return (
        <div className="field mt-5">
            <label className="label has-text-light">Elige un color</label>
            <div className="control has-icons-right">
                <input
                    className={`input p-1 ${errors.color && 'is-danger'}`}
                    name="color"
                    type="color"
                    ref={
                        register({
                            validate: {
                                noblack: value => value !== "#000000",
                                noWhite: value => value !== "#ffffff"
                            }
                        })
                    }
                />
                <span className="has-text-danger is-size-7">
                    {errors.color && 'Tienes que elegir un color'}
                </span>
            </div>
        </div>
    )
}
