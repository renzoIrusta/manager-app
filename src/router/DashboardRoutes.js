import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AdminScreen } from '../components/admin/AdminScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';

import { CalendarScreen } from '../components/calendar/CalendarScreen';
import { CashRegisterScreen } from '../components/cash-register/CashRegisterScreen';
import { CustomersScreen } from '../components/customers/CustomersScreen';
import { ToDoScreen } from '../components/to-do/ToDoScreen';
import { Dashboard } from '../components/ui/Dashboard';
import { NavBar } from '../components/ui/NavBar';
import { UsersScreen } from '../components/users/UsersScreen';



export const DashboardRoutes = () => {

    const { admin } = useSelector(state => state.auth)

    return (
        <>
            <NavBar />
            <div>
                <Switch>
                    <Route exact path="/" component={ Dashboard } />
                    <Route exact path="/calendar" component={ CalendarScreen } />
                    <Route exact path="/users" component={ UsersScreen } />
                    <Route exact path="/users/register" component={ RegisterScreen } />
                    <Route exact path="/todo" component={ ToDoScreen } />
                    <Route exact path="/customers" component={ CustomersScreen } />
                    <Route exact path="/customers/create" component={ CustomersScreen } />
                    {
                        admin &&
                        <Route exact path="/register" component={ CashRegisterScreen } />
                    }
                    {
                        admin &&
                        <Route exact path="/admin" component={ AdminScreen } />
                    }
                    
                    <Redirect to="/" />
                </Switch>
            </div>
        </>
    )
}
