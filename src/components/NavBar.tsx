import React from 'react';
import { routes } from "../pages/routes";
import { NavLink } from "react-router-dom";
import './NavBar.scss';

const NavBar = () => {
   const routesWithoutDynamicPaths = routes.filter(route => !/[:*]/g.test(route.path))

   return (
       <nav className="navbar">
          <ul className="navbar__list">
             {routesWithoutDynamicPaths.map(route =>
                 <li key={route.path} className="navbar__item">
                    <NavLink to={route.path} className="navbar__link"> {/*activeClassName="navbar__link--active"*/}
                       {route.path.replace(/\//g, '').toUpperCase()}
                    </NavLink>
                 </li>
             )}
          </ul>
          <b style={{fontSize: '1.2rem'}}>By manager</b>
       </nav>
   );
};

export default NavBar;
