import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useLocation } from 'react-router-dom';

const init = {
    search: false,
    create: false
}

export const CustomersTabs = () => {
    
    const location = useLocation();

    const [selected, setSelected] = useState(init)

    useEffect(() => {
        if( location.pathname === '/customers' ){
            console.log(location.pathname);
            setSelected({
                search: true,
                create: false
            })
        }else{
            setSelected({
                search: false,
                create: true
            })
        }
    }, [])


    return (
        <div className="tabs is-boxed">
            <ul>
                <li className={`${selected.search && 'is-active'}`}>
                    <Link
                        className="has-text-white"
                        to="/customers"
                        id="search"
                    >
                        <span className="icon is-small"><i className="fas fa-search" aria-hidden="true"></i></span>
                        <span>Buscar</span>
                    </Link>
                </li>
                <li className={`${selected.create && 'is-active'}`}>
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
