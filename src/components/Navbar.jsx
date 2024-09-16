// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';  // Bootstrap styles
import '../css_style/Navbar.css';  // Assuming you will create a custom CSS file for overrides

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">SkillSwap</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink exact to="/" className="nav-link" activeClassName="active">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/explore" className="nav-link" activeClassName="active">
                                Explore Skills
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/post" className="nav-link" activeClassName="active">
                                Post a Skill
                            </NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink to="/account" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                My Account
                            </NavLink>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/account/profile">Profile</Link></li>
                                <li><Link className="dropdown-item" to="/account/skills">My Skills</Link></li>
                                <li><Link className="dropdown-item" to="/account/settings">Settings</Link></li>
                                <li><Link className="dropdown-item" to="/logout">Logout</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
