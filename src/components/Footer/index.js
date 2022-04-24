import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
    FaGithub,
    FaLinkedin
} from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
      };
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About</FooterLinkTitle>
                            <FooterLink to='/signin'>Super</FooterLink>
                            <FooterLink to='/signin'>How</FooterLink>
                            <FooterLink to='/signin'>TOS</FooterLink>  
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>About</FooterLinkTitle>
                            <FooterLink to='/signin'>Super</FooterLink>
                            <FooterLink to='/signin'>How</FooterLink>
                            <FooterLink to='/signin'>TOS</FooterLink>  
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About</FooterLinkTitle>
                            <FooterLink to='/signin'>Super</FooterLink>
                            <FooterLink to='/signin'>How</FooterLink>
                            <FooterLink to='/signin'>TOS</FooterLink>  
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>About</FooterLinkTitle>
                            <FooterLink to='/signin'>Super</FooterLink>
                            <FooterLink to='/signin'>How</FooterLink>
                            <FooterLink to='/signin'>TOS</FooterLink>  
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                   <SocialLogo to='/' onClick={toggleHome}>JD</SocialLogo> 
                   <WebsiteRights>Jason Doze {new Date().getFullYear()} ©All Rights Reserved.</WebsiteRights>
                   <SocialIcons>
                       <SocialIconLink href='//github.com/Jason-Doze' target='_blank' aria-label='Github'>
                           <FaGithub />
                       </SocialIconLink>
                       <SocialIconLink href='//linkedin.com/in/jason-doze' target='_blank' aria-label='LinkedIn'>
                           <FaLinkedin />
                       </SocialIconLink>
                   </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;