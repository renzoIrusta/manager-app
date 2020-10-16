import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { RegisterScreen } from '../components/auth/RegisterScreen';

import { CalendarScreen } from '../components/calendar/CalendarScreen';
import { CustumersScreen } from '../components/customers/CustumersScreen';
import { Dashboard } from '../components/ui/Dashboard';
import { NavBar } from '../components/ui/NavBar';



export const DashboardRoutes = () => {
    return (
        <>
            <NavBar />
            <div>
                <Switch>
                    <Route exact path="/" component={ Dashboard } />
                    <Route exact path="/custumers" component={ CustumersScreen } />
                    <Route exact path="/calendar" component={ CalendarScreen } />
                    <Route exact path="/register" component={ RegisterScreen } />

                    <Redirect to="/" />
                </Switch>
            </div>
        </>
    )
}
