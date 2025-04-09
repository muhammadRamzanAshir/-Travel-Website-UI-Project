import React from "react";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import {faGlobe , faMapMarkerAlt, faHotel, faPlane, faBook,faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import NavItem from "./NavItem";
import ReusableButton from "./ReuseablButtons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Navbar = () => {
    const navItems = [
        {icon: faMapMarkerAlt,  label:'Destinations', href:'#'},
        {icon: faHotel,         label:'Hotels',       href:'#'},
        {icon: faPlane,         label:'Flights',      href:'#'},
        {icon: faBook,          label:'Booking',      href:'#'},
    ];

    return (
        <NavbarWrapper className="container-fluid">
            <header>
                <nav className="navbar navbar-expand-lg px-3 bg-transparent">
                    <a href="#" className="navbar-brand">
                        <img src="/images/Logo.png" alt="Logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* Navbar Links */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            {navItems.map((item, index) => (
                                <NavItem key={index} icon={item.icon} label={item.label} href={item.href}></NavItem>
                            ))}
                        </ul>
                        <StyledBtnDiv>
                            <ReusableButton
                                className="text-nowrap"
                                label="Login"
                                icon={faSignInAlt}
                                color="var(--text-color-01)"
                                border="1px solid var(--text-color-01)"
                                hoverBg="var(--main-color-00)"
                                hoverColor="var(--text-color-02)"
                                hoverBorder="var(--main-color-00)"
                            />
                            <ReusableButton
                                className="text-nowrap"
                                label="Sign Up"
                                icon={faUserPlus}
                                color="var(--text-color-02)"
                                bg="var(--main-color-00)"
                                border="1px solid var(--main-color-00)"
                                hoverBg="transparent"
                                hoverColor="var(--text-color-01)"
                                hoverBorder="var(--text-color-01)"
                            />
                            <select class="form-select form-select-sm border-0 bg-transparent w-100">
                                <option><a href="#" icon={faGlobe}></a> EN</option>
                                <option><a href="#" icon={faGlobe}></a> FR</option>
                                <option><a href="#" icon={faGlobe}></a> DE</option>
                            </select>
                        </StyledBtnDiv>
                    </div>
                </nav>
            </header>
        </NavbarWrapper>
    );
}

export default Navbar;

const NavbarWrapper = styled.div`
    /* Ensures the full width */
    width: 100%;
    max-width: 100%;
    margin: 0;
    padding: 0;
    
    .navbar {
        background-color: transparent;
        padding: 15px 0;
    }

    .navbar-brand {
        height: 40px;
    }
`;

const StyledBtnDiv = styled.section`
    display:  flex;
    flex-direction: row;
    gap:20px;
    @media (max-width: 992px){
        flex-direction: column;
    }
`;