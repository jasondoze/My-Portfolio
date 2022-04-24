import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
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




const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = ()=> {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
    return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavbarLogo to='/' onClick={toggleHome}>Jason Doze</NavbarLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about'
              smooth={true}
              duration={500} 
              spy={true} 
              exact='true' 
              offset={-80}
              >
                About Me
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='experience'
               smooth={true}
               duration={500} 
               spy={true} 
               exact='true' 
               offset={-80}
               >
                 Experience
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='portfolio'
               smooth={true}
               duration={500} 
               spy={true} 
               exact='true' 
               offset={-80}
               >
                 Portfolio
              </NavLinks>
              
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/signin'>Contact Me</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
    );
};

export default Navbar;
