import React, { Component } from 'react';
//import and use Link from react router to make links and navigate routes
import { NavLink } from "react-router-dom";
import routes from '../router/routes'
import NavItem from './NavItem'


class Nav extends Component {
    render() {
        return (
            <nav>
                <ul className="navigation">
                    {routes.map((route, index) =>
                        <NavItem
                            key={index}
                            {...route}
                        />
                    )}
                </ul>
            </nav>
        );
    }
}

export default Nav;