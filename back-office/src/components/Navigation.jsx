import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";

const Navigation = () => {
  return (
    <>
      <nav className="sidebar ">
        <header className="sidebar-header">
          <img className="sidebar-header-logo" src="img/logo.png" alt="Logo" />
        </header>

        <div className="menu-bar">
          <ul className="menu-bar-menu">
            <li>
              <Button name="Ajouter un évènement" type="outlined" color="secondary"  />
            </li>
            <li className="nav-link">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                <i className="bx bx-user icon"></i>
                <span className="text nav-text">Profil</span>
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink
                to="/gestion_evenement"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                <i className="bx bx-calendar-check icon"></i>
                <span className="text nav-text">Gestion évènements</span>
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink
                to="/historique"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                <i className="bx bxs-time-five icon"></i>
                <span className="text nav-text">Historique</span>
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink
                to="/offre"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                <i className="bx bxs-dollar-circle icon"></i>
                <span className="text nav-text">Créer une offre</span>
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink
                to="/info_client"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                <i className="bx bxs-info-circle icon"></i>
                <span className="text nav-text">Info client</span>
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink
                to="/parametre"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                <i className="bx bxs-cog icon"></i>
                <span className="text nav-text">Paramètre</span>
              </NavLink>
            </li>
          </ul>

          <a href="#" className="menu-bar-bottom">
            <i className="bx bx-log-out icon"></i>
            <span className="text nav-text">Déconnexion</span>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
