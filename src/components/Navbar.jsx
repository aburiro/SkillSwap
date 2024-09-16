// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../css_style/Navbar.css';  // Assuming you'll create a CSS file for styles

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">SkillSwap</Link>
            </div>
            <ul className="navbar-links">
                <li>
                    <NavLink exact to="/" activeClassName="active-link">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/explore" activeClassName="active-link">
                        Explore Skills
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/post" activeClassName="active-link">
                        Post a Skill
                    </NavLink>
                </li>
                <li className="navbar-account">
                    <NavLink to="/account" activeClassName="active-link">
                        My Account
                    </NavLink>
                    {/* Dropdown for user account options */}
                    <ul className="dropdown">
                        <li><Link to="/account/profile">Profile</Link></li>
                        <li><Link to="/account/skills">My Skills</Link></li>
                        <li><Link to="/account/settings">Settings</Link></li>
                        <li><Link to="/logout">Logout</Link></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
