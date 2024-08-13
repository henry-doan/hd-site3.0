import { Fade, Flip } from 'react-reveal';
import { useLocation } from 'react-router-dom';

import Header from '../shared/Header';
import { HomeProjTitle, ProjDesc, ProjDescSection, ProjDetailContainer, ProjSkill, ProjSkills, ProjSkillsSection } from '../styled/projStyles';
import { BottomBtn, HBtn, HLink, HomeSubTitle, LtBtn, RtBtn, TopBtn } from '../styled/sharedStyles';

const ProjectDetails = () => {
  const location = useLocation();

  const { name, img, desc, github, liveSite, stack } = location.state
  return(
    <>
      <Header img={img} text={name} />
      <ProjDetailContainer>
        <ProjDescSection>
          <Flip top>
            <HomeProjTitle>Project Description</HomeProjTitle>
          </Flip>
          <Fade left>
            <ProjDesc>{desc}</ProjDesc>
          </Fade>
        </ProjDescSection>
        <ProjSkillsSection>
          <Flip top>
            <HomeSubTitle>Built With</HomeSubTitle>
          </Flip>
          <Fade right>
            <ProjSkills>
              { stack.map( tool => <ProjSkill>{tool}</ProjSkill>)}
            </ProjSkills>
          </Fade>
          {
            liveSite ?
            <HBtn href={liveSite} target="_blank" el="noopener noreferrer">
              <TopBtn></TopBtn>
              <RtBtn></RtBtn>
              <BottomBtn></BottomBtn>
              <LtBtn></LtBtn>
              Go To Site
            </HBtn>
            :
            <HLink to="/private-repo" primary>
              <TopBtn></TopBtn>
              <RtBtn></RtBtn>
              <BottomBtn></BottomBtn>
              <LtBtn></LtBtn>
              Go To Site
            </HLink>
          }
          { 
            github ?
            <HBtn href={github} target="_blank" el="noopener noreferrer">
              <TopBtn></TopBtn>
              <RtBtn></RtBtn>
              <BottomBtn></BottomBtn>
              <LtBtn></LtBtn>
              Github
            </HBtn> 
            :
            <HLink to="/private-repo" primary>
              <TopBtn></TopBtn>
              <RtBtn></RtBtn>
              <BottomBtn></BottomBtn>
              <LtBtn></LtBtn>
              Github
            </HLink>
          }
        </ProjSkillsSection>
      </ProjDetailContainer>
    </>
  )
}

export default ProjectDetails;