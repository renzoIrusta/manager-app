import React from 'react';
import { Link } from 'react-router-dom';

export const DashboarCard = ({ icon, color, path }) => {

    return (
        <Link 
        className='card__link m-3' 
        to={path}
        >
            <div
            role="button"
            className={`card__dashcard ripple py-3 ${ color }`}
            >
                <p className='card__icon'>{icon}</p>
            </div>
        </Link>
    )
}

