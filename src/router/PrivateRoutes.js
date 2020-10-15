import React from 'react';
import { Redirect, Route } from 'react-router-dom';

// aquí tengo que usar redux para saber si está logueado o no

export const PrivateRoutes = ({
    component: Component,
    isLogged,
    ...rest
}) => {
    return (
        <div>
            <Route {...rest}
            component={ ( props ) => (
                ( isLogged )
                    ? <Component {...props}/>
                    : <Redirect to="/login" />
            ) }
            />
        </div>
    )
}
