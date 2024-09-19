// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css_style/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button className="btn btn-link navbar-brand d-flex align-items-center">
                    <img 
                        src="src/assets/imges/skillswap_logo.PNG" 
                        alt="SkillSwap Logo" 
                        width="30" 
                        height="30" 
                        className="d-inline-block align-top me-2"
                    />
                    <Link className="navbar-brand mb-0" to="/">SkillSwap</Link>
                </button>
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
                            <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/explore" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                                Explore Skills
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/post" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                                Post a Skill
                            </NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink to="/account" className={({ isActive }) => isActive ? "nav-link dropdown-toggle active" : "nav-link dropdown-toggle"} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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