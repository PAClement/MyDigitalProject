import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {

    return (
        <>
            <nav className="sidebar ">
                <header>
                    <div className="image-text">
                        <span className="image">
                            <img className="mr-3" src="img/logo.png" alt=""/>
                        </span>
                        <div className="text logo-text">
                            <span className="name">EXEO</span>
                        </div>
                    </div>
                </header>
                <div className="menu-bar">
                    <div className="menu">
                        <button>Ajouter une évènement</button>
                        <ul className="menu-links">
                            <li className="nav-link">
                                <NavLink to='/' className={({isActive}) => (isActive ? 'nav-active' : '')}>
                                    <i className='bx bx-user icon'></i>
                                    <span className="text nav-text">
                                        Profil
                                    </span>
                                </NavLink>
                            </li>
                            <li className="nav-link">
                                <NavLink to='/account' className={({isActive}) => (isActive ? 'nav-active' : '')}>
                                    <i className='bx bx-calendar-check icon'></>
                                    <span className="text nav-text">
                                        Gestion évènements
                                    </span>
                                </NavLink>
                            </li>
                            <li className="nav-link">
                                <NavLink to='/message' className={({isActive}) => (isActive ? 'nav-active' : '')}>
                                    <i className='bx bx-message-alt-detail icon'></i>
                                    <span className="text nav-text">
                                        Historique
                                    </span>
                                </NavLink>
                            </li>
                            <li className="nav-link">
                                <NavLink to='/message' className={({isActive}) => (isActive ? 'nav-active' : '')}>
                                    <i className='bx bx-message-alt-detail icon'></i>
                                    <span className="text nav-text">
                                        Créer une offre
                                    </span>
                                </NavLink>
                            </li>
                            <li className="nav-link">
                                <NavLink to='/message' className={({isActive}) => (isActive ? 'nav-active' : '')}>
                                    <i className='bx bx-message-alt-detail icon'></i>
                                    <span className="text nav-text">
                                        Info client
                                    </span>
                                </NavLink>
                            </li>
                            <li className="nav-link">
                                <NavLink to='/message' className={({isActive}) => (isActive ? 'nav-active' : '')}>
                                    <i className='bx bx-message-alt-detail icon'></i>
                                    <span className="text nav-text">
                                        Paramètre
                                    </span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="bottom-content">
                        <li className="">
                            <a href="#">
                                <i className='bx bx-log-out icon'></i>
                                <span className="text nav-text">Deconnexion</span>
                            </a>
                        </li>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navigation;