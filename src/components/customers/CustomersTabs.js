import React from 'react';
import { Link } from 'react-router-dom';

import { useLocation } from 'react-router-dom';

export const CustomersTabs = () => {
    
    const location = useLocation();

    return (
        <div className="tabs is-boxed">
            <ul>
                <li className={`${location.pathname === '/customers' && 'is-active'}`}>
                    <Link
                        className="has-text-white"
                        to="/customers"
                        id="search"
                    >
                        <span className="icon is-small"><i className="fas fa-search" aria-hidden="true"></i></span>
                        <span>Buscar</span>
                    </Link>
                </li>
                <li className={`${location.pathname === '/customers/create' && 'is-active'}`}>
                    <Link
                        className="has-text-white"
                        to="/customers/create"           
                        id="create"
                    >
                        <span className="icon is-small"><i className="fas fa-plus" aria-hidden="true"></i></span>
                        <span>Crear</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
