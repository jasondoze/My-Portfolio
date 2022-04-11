import React from 'react';
import {FaBars} from 'react-icons/fa';
import { 
  Nav,
  NavbarContainer,
  NavbarLogo, 
  MobileIcon, 
  NavMenu, 
  NavItem,  
  NavLinks,
  NavBtn,
  NavBtnLink
} from './NavbarElements';




const Navbar = () => {
    return (
    <>
      <Nav>
        <NavbarContainer>
          <NavbarLogo to='/'>Jason Doze</NavbarLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about'>About Me</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='experience'>Experience</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='portfolio'>Portfolio</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='contact'>Contact Me</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/contact'>Contact Me</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
    );
};

export default Navbar;
