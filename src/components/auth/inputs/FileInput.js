import React from 'react';

export const FileInput = ({ errors, register, handleChange, fileName }) => {

    return (
        <div className="field mt-5">
            <label className="label has-text-light">Sube una imagen</label>
            <div className="control has-icons-right">

                <div className="file has-name is-fullwidth">
                    <label className="file-label">
                        <input 
                        className="file-input" 
                        type="file" 
                        name="file" 
                        onChange={ handleChange }
                        />
                        <span className="file-cta">
                            <span className="file-icon">
                                <i className="fas fa-upload"></i>
                            </span>
                            <span className="file-label">
                                Sube una imagen
                            </span>
                        </span>
                        <span className="file-name has-text-white">
                            {fileName ? fileName : 'Imagen'}
                        </span>
                    </label>
                </div>

                {
                    errors.image
                    &&
                    <span className="icon is-small is-right">
                        <i className="fas fa-exclamation-triangle has-text-danger"></i>
                    </span>
                }
                <span className="has-text-danger is-size-7">
                    {errors?.image?.message}
                </span>
            </div>
        </div>
    )
}
