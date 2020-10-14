import React from 'react';
// import { Link, NavLink, useHistory } from 'react-router-dom'
// Pasar todos los a link
export const NavBar = () => {
    return (
        <nav className="navbar is-success" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">

                <a className="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28" />
                </a>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-app">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>

            </div>

            <div className="navbar-menu" id="navbar-app">

                <div className="navbar-end">
                    <a className="navbar-item" href="/clientes">Clientes</a>
                    <a className="navbar-item" href="/clientes">Agenda</a>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button is-link is-outlined">
                                Salir
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </nav>
    )
}
