import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const AdminRoutes = ({
    component: Component,
    isAdmin,
    isLogged,
    ...rest
}) => {
    return (
        <div>
            <Route {...rest}
            component={ ( props ) => (
                ( isAdmin && isLogged )
                    ? <Component {...props}/>
                    : <Redirect to="/login" />
            ) }
            />
        </div>
    )
}
