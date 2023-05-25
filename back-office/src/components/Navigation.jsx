import React from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import Button from "./Button";

const Navigation = () => {

    const navigation = useNavigate();

    const logout = () => {
        localStorage.removeItem('user');
        navigation('/authentification');
    }

    return (
        <>
            <nav className="sidebar ">
                <header>
                    <div className="image-text">
                        <span className="image">
                            <img className="mr-3" src="img/logo.png" alt="Logo"/>
                        </span>
                    </div>
                </header>

                <div className="menu-bar">
                    <div className="menu">
                        <NavLink to='/add_event'>
                            <Button name="Ajouter un evenement" icon="bx bx-plus"/>
                        </NavLink>
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
                                <NavLink to='/gestion_evenement' className={({isActive}) => (isActive ? 'nav-active' : '')}>
                                    <i className='bx bx-calendar-check icon'></i>
                                    <span className="text nav-text">
                                        Gestion évènements
                                    </span>
                                </NavLink>
                            </li>
                            <li className="nav-link">
                                <NavLink to='/historique' className={({isActive}) => (isActive ? 'nav-active' : '')}>
                                    <i className='bx bxs-time-five icon'></i>
                                    <span className="text nav-text">
                                        Historique
                                    </span>
                                </NavLink>
                            </li>
                            <li className="nav-link">
                                <NavLink to='/offre' className={({isActive}) => (isActive ? 'nav-active' : '')}>
                                    <i className='bx bxs-dollar-circle icon'></i>
                                    <span className="text nav-text">
                                        Créer une offre
                                    </span>
                                </NavLink>
                            </li>
                            <li className="nav-link">
                                <NavLink to='/info_client' className={({isActive}) => (isActive ? 'nav-active' : '')}>
                                    <i className='bx bxs-info-circle icon'></i>
                                    <span className="text nav-text">
                                        Info client
                                    </span>
                                </NavLink>
                            </li>
                            <li className="nav-link">
                                <NavLink to='/parametre' className={({isActive}) => (isActive ? 'nav-active' : '')}>
                                    <i className='bx bxs-cog icon'></i>
                                    <span className="text nav-text">
                                        Paramètre
                                    </span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="bottom-content">
                        <li className="">
                            <a onClick={logout}>
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