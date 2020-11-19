import React from 'react';
import { Route } from 'react-router-dom';
import { CustomerProfile } from './CustomerProfile';
import { CustomersCreate } from './CustomersCreate';
import { CustomerSearcher } from './CustomerSearcher';
import { CustomersTabs } from './CustomersTabs';

export const CustomersScreen = () => {    
    return (
        <div className='container p-5'>
            <CustomersTabs />
            <div className='flex-container is-align-items-center is-flex-direction-column'>
                <p className="title has-text-white is-align-self-flex-start">Clientes</p>
                <Route exact path="/customers" component={ CustomerSearcher } />
                <Route exact path="/customers/create" component={ CustomersCreate } />
                <Route exact path="/customers/profile" component={ CustomerProfile } />
            </div>
        </div>
    )
}
