import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElements';
import { 
  HeroContainer,
  HeroBg, 
  VideoBg, 
  HeroContent, 
  HeroH1, 
  HeroP, 
  HeroBtnWrapper, 
  ArrowForward, 
  ArrowRight } 
  from './HeroElements';

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }
  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
          <HeroH1>Jason Doze</HeroH1>
            <HeroP>
              Bio: 
            </HeroP>
            <HeroBtnWrapper>
              <Button 
                to='signup'
                onMouseEnter={onHover} 
                onMouseLeave={onHover}
                primary='true'
                dark='false'
                smooth={true}
                duration={500} 
                spy={true} 
                exact='true' 
                offset={-80}
              >
                Contact Me {hover ? <ArrowForward /> : <ArrowRight />}
              </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection;
