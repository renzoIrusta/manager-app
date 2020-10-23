import React from 'react';
import { useSelector } from 'react-redux';

import { DashboarCard } from './DashboarCard';

export const Dashboard = () => {

    const { admin } = useSelector(state => state.auth)

    return (
        <div className="container">
            <div className="card__container">
                {
                    admin &&
                    <DashboarCard
                    icon={<i className="fas fa-cash-register"></i>}
                    path='/register'
                    color='card__clean'
                    />
                }
                <DashboarCard
                    icon={<i className="fas fa-users"></i>}
                    path='/users'
                    color='card__clean'
                />
                {
                    admin &&
                    <DashboarCard
                    icon={<i className="far fa-handshake"></i>}
                    path='/custumers'
                    color='card__clean'
                    />
                }
                <DashboarCard
                    icon={<i className="far fa-calendar-alt"></i>}
                    path='/calendar'
                    color='card__clean'
                />
                <DashboarCard
                    icon={<i className="fas fa-clipboard-list"></i>}
                    path='/todo'
                    color='card__clean'
                />
                {
                    admin &&
                    <DashboarCard
                    icon={<i className="fas fa-tools"></i>}
                    path='/admin'
                    color='card__clean'
                    />
                }
            </div>
        </div>
    )
}
