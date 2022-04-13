import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-light navbar-expand-lg bg-light fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src=".\iitLogo.jpg" alt="iit" width="40" height="34" className="d-inline-block align-text-top" />
                        GHM Portal
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Logins
                                </Link>
                                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/GuestForm">IIT User Login</Link></li>
                                    <li><a className="dropdown-item" href="/Login">IIT User Login without Routing</a></li>
                                    <li><Link className="dropdown-item" to="/">Guest Login</Link></li>
                                    <li><Link className="dropdown-item" to="/">Admin</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/">Other Options</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="./GuestForm">Accommodation</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dining
                                </Link>
                                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/">Guest House Kitchen</Link></li>
                                    <li><Link className="dropdown-item" to="/">Main Cafeteria</Link></li>
                                    <li><Link className="dropdown-item" to="/">Outside IIT</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/">Other Options</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="https://www.iitrpr.ac.in/guest-house">Rules</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">People</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="./Contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
