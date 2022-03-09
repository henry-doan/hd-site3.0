import Header from '../shared/Header';
import { useLocation } from 'react-router-dom';
import { HBtn, TopBtn, RtBtn, BottomBtn, LtBtn, HomeSubTitle } from '../styled/sharedStyles';
import { ProjDetailContainer, ProjDescSection, ProjSkillsSection, ProjSkills, ProjSkill, ProjDesc, HomeProjTitle } from '../styled/projStyles';
import { Flip, Fade } from 'react-reveal';

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
          <HBtn href={liveSite} target="_blank" el="noopener noreferrer">
            <TopBtn></TopBtn>
            <RtBtn></RtBtn>
            <BottomBtn></BottomBtn>
            <LtBtn></LtBtn>
            Go To Site
          </HBtn>
          <HBtn href={github} target="_blank" el="noopener noreferrer">
            <TopBtn></TopBtn>
            <RtBtn></RtBtn>
            <BottomBtn></BottomBtn>
            <LtBtn></LtBtn>
            Github
          </HBtn> 
        </ProjSkillsSection>
      </ProjDetailContainer>
    </>
  )
}

export default ProjectDetails;