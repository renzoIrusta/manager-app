import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { authLogout } from '../../actions/auth';

import { uiCloseNavbar, uiOpenNavbar } from '../../actions/ui';


// Pasar todos los a link y usar si es necesario el history

export const NavBar = () => {

    const dispatch = useDispatch();

    const { dashboardModal } = useSelector(state => state.ui);
    const { admin } = useSelector(state => state.auth);

    const handleDashboardModal = () => {
        (!dashboardModal)
            ? dispatch(uiOpenNavbar())
            : dispatch(uiCloseNavbar())
    };

    const handleLinkClick = () => {
        dashboardModal && dispatch(uiCloseNavbar())
    };

    const handleLogout = () => {
        dashboardModal && dispatch(uiCloseNavbar())
        dispatch(authLogout())
    }

    return (
        <nav className="navbar is-success is-fixed-top" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">

                <Link
                    className="navbar-item"
                    onClick={handleLinkClick}
                    to="/"
                >
                    <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28" />
                </Link>

                <span
                    role="button"
                    className={`navbar-burger ${dashboardModal && 'is-active'}`} 
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbar-app"
                    onClick={handleDashboardModal}
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </span>

            </div>

            <div className={`navbar-menu animate__animated animate__fadeIn ${dashboardModal && 'is-active'}`} id="navbar-app">

                <div className='navbar-end'>
                    {
                        admin &&
                        <Link
                            className="navbar-item"
                            onClick={handleLinkClick}
                            to="/register"
                        >
                            Caja
                        </Link>
                    }
                    <Link
                        className="navbar-item"
                        onClick={handleLinkClick}
                        to="/users"
                    >
                        Colaboradores
                    </Link>
                    {
                        admin &&
                        <Link
                            className="navbar-item"
                            onClick={handleLinkClick}
                            to="/custumers"
                        >
                            Clientes
                        </Link>
                    }
                    <Link
                        className="navbar-item"
                        onClick={handleLinkClick}
                        to="/calendar"
                    >
                        Agenda
                    </Link>
                    <Link
                        className="navbar-item"
                        onClick={handleLinkClick}
                        to="/todo"
                    >
                        Tareas
                    </Link>
                    {
                        admin &&
                        <Link
                            className="navbar-item"
                            onClick={handleLinkClick}
                            to="/admin"
                        >
                            Admin
                        </Link>
                    }
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <button
                                className="button is-link is-outlined"
                                onClick={handleLogout}
                            >
                                Salir
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </nav>
    )
}
