import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/svg-logo-andyrtv.svg';

const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(90deg, #F9CE34, #EE2A7B, #6228D7);
  padding: 1rem;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-sizing: border-box;
`;

const Logo = styled.img`
  height: 50px;
  margin-right: 1rem;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

const NavLink = styled.a`
  color: rgb(0, 0, 0);
  text-decoration: none;
  font-weight: bold;
  margin: 0 20px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo src={logo} alt="Logo" />
      <NavLinks>
        <li><NavLink href="#home">ACCUEIL</NavLink></li>
        <li><NavLink href="#projects">PROJET</NavLink></li>
        <li><NavLink href="#about">À PROPOS</NavLink></li>
        <li><NavLink href="#contact">CONTACT</NavLink></li>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
