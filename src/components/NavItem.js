import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class NavItem extends Component {
    render() {
        let { path, label } = this.props
        return (
            <NavLink to={path} activeClassName="activeNav">
                <li>{label}</li>
            </NavLink>
        );
    }
}

export default NavItem;
