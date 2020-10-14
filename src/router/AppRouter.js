import React from 'react';
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";

import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

import { DashboardRoutes } from './DashboardRoutes';
import { LoginScreen } from '../components/auth/LoginScreen';


export const AppRouter = () => {
    return (
        <div>
            <Router>
                <div>
                    <Switch>
                        <PublicRoutes
                        exact
                        path="/login" 
                        component={ LoginScreen }
                        // isAuthenticated={ user.logged }
                        />
                        <PrivateRoutes 
                        path="/" 
                        component={ DashboardRoutes }
                        // isAuthenticated={ user.logged } 
                        />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}
