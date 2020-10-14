import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

// aquí tengo que usar redux para saber si está logueado o no

export const PrivateRoutes = ({
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
