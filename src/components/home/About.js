import { faBriefcase, faCode, faLocationDot } from "@fortawesome/free-solid-svg-icons";

import Avatar from '../../images/hdAvatar.jpeg';
import { AboutContainer, AboutLeft, AboutLink, AboutMainIcon, AboutOutSourceLink, AboutPara, AboutRight, AboutSec, AboutTitle, AvatarImg, AvatarImgContainer, AvatarSec, BtnContainer, DateIcon, DateSec, NameTitle, SkillsSec } from "../styled/aboutStyles";
import { ProjSkill, ProjSkills } from '../styled/projStyles';
import { BottomBtn, HBtn, LtBtn, RtBtn, TopBtn } from '../styled/sharedStyles';
import skills from './Skills';

const About = () => (
  <AboutContainer>
    <AboutSec>
      <AboutLeft>
        <NameTitle>Henry Doan</NameTitle>
        <DateSec>
          <DateIcon className="fa fa-fw" icon={faBriefcase} />
          Full Stack Web Developer
        </DateSec>
        <DateSec>
          <DateIcon className="fa fa-fw" icon={faLocationDot} />
          Sillicon Slopes
        </DateSec>
        <AboutPara>
          Hello, I am Henry and I have a passion to build really awesome products and to spread my knowledge to others. 
        </AboutPara> 
        <AboutPara>
          I didn't start off in the industry but quickly learn to love it. My interests grew when I started in 2014 on learning Web Development and saw how I can produce magic. With simple lines of code, it can produce a extraordinary results, with the more I code, the more I improve the user experiences and continue to code to this day. With the exciting new advances in techonolgies, I can never get bored of what I do and am alway learning to adapt to the new changes. 
        </AboutPara>
        <AboutPara>
          Fast forward to what I do now, of developing <AboutLink to='/projects'>Applications</AboutLink>, and spread my knowledge on platforms such as my <AboutOutSourceLink href="https://hd-coding.netlify.app/" target="_blank" rel="noopener noreferrer">Youtube</AboutOutSourceLink>, personal <AboutOutSourceLink href="https://hd-blog-henry-doan.vercel.app/" target="_blank" rel="noopener noreferrer">Blog</AboutOutSourceLink> and doing my dream job of developing apps and features for industry leading tools. 
        </AboutPara>   
      </AboutLeft>
      <AboutRight>
        <AvatarSec>
          <AvatarImgContainer>
            <AvatarImg
              src={Avatar} 
              alt="avatar" 
              effect="blur"
            />
          </AvatarImgContainer>
        </AvatarSec>
      </AboutRight>
    </AboutSec>
    <SkillsSec>
      <AboutTitle>
        <AboutMainIcon className="fa fa-fw" icon={faCode} />
        Skills
      </AboutTitle>
      <ProjSkills>
        { skills.map( tool => <ProjSkill key={tool}>{tool}</ProjSkill>)}
      </ProjSkills>
    </SkillsSec>
    <BtnContainer>
      <HBtn href="https://github.com/henry-doan" target="_blank" el="noopener noreferrer">
        <TopBtn></TopBtn>
        <RtBtn></RtBtn>
        <BottomBtn></BottomBtn>
        <LtBtn></LtBtn>
        Github
      </HBtn> 
    </BtnContainer>
  </AboutContainer>
)

export default About;