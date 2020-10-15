import React from 'react'

export const LoginForm = () => {



    return (
        <form
        // onSubmit={handleLogin}
        className="auth__form"
        >
            <div className="field my-10">
                <label className="label has-text-light">Email</label>
                <div className="control">
                    <input 
                    className="input" 
                    type="text" 
                    placeholder="Ingresa tu email" 
                    />
                </div>
            </div>
            <div className="field">
                <label className="label has-text-light">Contraseña</label>
                <div className="control">
                    <input 
                    className="input" 
                    type="password" 
                    placeholder="Ingresa tu contraseña" 
                    />
                </div>
            </div>
            <div className="field ">
                <div className="control mt-6">
                    <button className="button is-link is-fullwidth is-outlined">
                        Ingresar
                    </button>
                </div>
            </div>

        </form>
    )
}
