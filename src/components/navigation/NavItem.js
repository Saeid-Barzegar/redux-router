import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class NavItem extends Component {
    render() {
        let { path, label } = this.props
        const oddEvent = (match, location) => {
            if (!match) {
                return false
            }
            const eventID = parseInt(match.params.eventID)
            return !isNaN(eventID) && eventID % 2 === 1
        }
        return (
            <NavLink to={path} isActive={oddEvent} activeClassName="activeLink">
                <li>{label}</li>
            </NavLink>
        );
    }
}

export default NavItem;
