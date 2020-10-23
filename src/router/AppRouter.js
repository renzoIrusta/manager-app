import React from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Switch
} from "react-router-dom";

import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

import { DashboardRoutes } from './DashboardRoutes';
import { LoginScreen } from '../components/auth/LoginScreen';
import { useSelector } from 'react-redux';


export const AppRouter = () => {

    const { logged } = useSelector(state => state.auth)

    return (
        <div>
            <Router>
                <div>
                    <Switch>
                        <PublicRoutes
                            exact
                            path="/login"
                            component={LoginScreen}
                            isLogged={logged}
                        />
                        <PrivateRoutes
                            path="/"
                            component={DashboardRoutes}
                            isLogged={logged}
                        />

                        <Redirect to="/login" />

                    </Switch>
                </div>
            </Router>
        </div>
    )
}
