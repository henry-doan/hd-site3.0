import { AboutTitle, AboutMainIcon, AboutContainer, AvatarSec, AvatarImg, AvatarText, SkillsSec, DateSec, DateIcon, AboutSec, AboutLeft, AboutRight, AboutPara } from "../styled/aboutStyles";
import Avatar from '../../images/hdAvatar.jpeg';
import { ProjSkills, ProjSkill } from '../styled/projStyles';
import skills from './Skills';

const About = () => (
  <AboutContainer>
    <AboutSec>
      <AboutLeft>
        <DateSec>
          <DateIcon className="fa fa-briefcase fa-fw"></DateIcon>
          Full Stack Web Developer
        </DateSec>
        <DateSec>
          <DateIcon className="fa fa-map-marker fa-fw"></DateIcon>
          Sillicon Slopes
        </DateSec>
        <AboutPara>
          Hello, I am Henry and I love to build really cool stuff and to spread my knowledge to others. 
        </AboutPara> 
        <AboutPara>
          I didn't start off in the industry but quickly learn to love it. My interest grew when I started in 2014 on learning Web Development and saw how I can produce magic. With simple lines of code, it can produce a extraordinary results with the more I code, the more I improve the user experiences and continue to code to this day. With the exciting new advances in techonolgies, I can never get bored of what I do and am alway learning to adapt to the new changes. 
        </AboutPara>
        <AboutPara>
          Fast forward to what I do now, of developing <b>Applications</b>, and spread my knowledge on platforms such as my <b>youtube</b>, personal <b>blog</b> and instruct a Part Time Full Stack Web Development course at <b>DevPoint Labs</b>. 
        </AboutPara>   
      </AboutLeft>
      <AboutRight>
        <AvatarSec>
          <AvatarImg src={Avatar} alt="avatar" />
          <AvatarText>Henry Doan</AvatarText>
        </AvatarSec>
      </AboutRight>
    </AboutSec>
    <SkillsSec>
      <AboutTitle>
        <AboutMainIcon className="fa fa-code fa-fw"></AboutMainIcon>
        Skills
      </AboutTitle>
      <ProjSkills>
        { skills.map( tool => <ProjSkill>{tool}</ProjSkill>)}
      </ProjSkills>
    </SkillsSec>
  </AboutContainer>
)

export default About;