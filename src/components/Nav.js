import React, { Component } from 'react';
//import and use Link from react router to make links and navigate routes
import { Link } from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <nav>
                <ul className="navigation">
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>
                </ul>
            </nav>
        );
    }
}

export default Nav;