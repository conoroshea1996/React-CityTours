import React from 'react';
import './Navbar.scss';
import Logo from '../../Logo.jpg';

export default function NavBar(){
    return (
        <nav className="Navbar">
        <img src={Logo} alt="LogoImage"/>
        <ul className= "Nav-links">
            <li>
                <a className="Nav-link" href="/"> Home </a>
            </li>
            <li>
                <a className="Nav-link" href="/"> About </a>
            </li>
            <li>
                <a className="Nav-link-active" href="/"> Tours </a>
            </li>
        </ul>
        </nav>
    )
}