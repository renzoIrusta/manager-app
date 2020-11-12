import React from 'react';
import { CustomerSearcher } from './CustomerSearcher';

export const CustomersScreen = () => {

    return (
        <div className='container is-justify-content-center p-5'>
            <div className='flex-container is-justify-content-center'>
                <CustomerSearcher />
            </div>
        </div>
    )
}
