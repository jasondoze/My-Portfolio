import React from 'react';
import Icon1 from '../../images/icon.jpg'
import Icon2 from '../../images/icon.jpg'
import Icon3 from '../../images/icon.jpg'
import {
    PortfolioContainer,
    PortfolioH1,
    PortfolioWrapper,
    PortfolioCard,
    PortfolioIcon,
    PortfolioH2,
    PortfolioP
} from './PortfolioElements';


const Portfolio = () => {
  return (
    <PortfolioContainer id='portfolio'>
        <PortfolioH1>Portfolio</PortfolioH1>
            <PortfolioWrapper>
                <PortfolioCard>
                    <PortfolioIcon scr={Icon1}/>
                    <PortfolioH2>Inheritance</PortfolioH2>
                    <PortfolioP>Image Upload, Filters, Category Tags and Gallery Page</PortfolioP>   
                </PortfolioCard>
                <PortfolioCard>
                    <PortfolioIcon scr={Icon2}/>
                    <PortfolioH2>Social Network App</PortfolioH2>
                    <PortfolioP>Profiles, Likes, Comments, and Sign In Credentials</PortfolioP> 
                </PortfolioCard>
                <PortfolioCard>
                    <PortfolioIcon scr={Icon3}/>
                    <PortfolioH2>What?</PortfolioH2>
                    <PortfolioP>Yeyaah</PortfolioP>
                </PortfolioCard>
            </PortfolioWrapper>
    </PortfolioContainer>
  )
}

export default Portfolio;