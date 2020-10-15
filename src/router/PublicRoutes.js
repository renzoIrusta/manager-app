import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const PublicRoutes = ({
    component: Component,
    isLogged,
    ...rest
}) => {
    return (
        <div>
             <Route {...rest}
             component={ ( props ) => (
                 ( !isLogged )
                    ? <Component {...props}/>
                    : <Redirect to="/" />
             ) }
            />
        </div>
    )
}
