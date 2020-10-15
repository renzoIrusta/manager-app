import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Dashboard } from '../components/ui/Dashboard';


import { NavBar } from '../components/ui/NavBar';

export const DashboardRoutes = () => {
    return (
        <>
            <NavBar />
            <div>
                <Switch>
                    <Route exact path="/" component={ Dashboard } />

                    <Redirect to="/" />
                </Switch>
            </div>
        </>
    )
}
