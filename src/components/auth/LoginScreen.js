import React from 'react';
import { LoginForm } from './LoginForm';

// No olvidar posibilidad de poner imagen en el login

export const LoginScreen = () => {
    return (
        <div className="auth__form-container">
            <LoginForm />
        </div>
    )
}
