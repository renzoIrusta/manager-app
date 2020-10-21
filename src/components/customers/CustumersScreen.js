import React from 'react';

import { loadData } from '../../helpers/loadInfo';


export const CustumersScreen = () => {

    const bringData = async() => {

       console.log( await loadData( 'users' ) ); 

    }

    bringData();

    return (
        <div>
            <h1 className="title">Customers</h1>
        </div>
    )
}
