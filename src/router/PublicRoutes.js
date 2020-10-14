import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const PublicRoutes = ({
    component: Component,
    ...rest
}) => {
    return (
        <div>
             <Route {...rest}
             component={ Component }
            />
        </div>
    )
}
