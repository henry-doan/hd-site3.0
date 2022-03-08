import Header from '../shared/Header';
import { useLocation } from 'react-router-dom';
import { HBtn, TopBtn, RtBtn, BottomBtn, LtBtn, HomeSubTitle } from '../styled/sharedStyles';
import { ProjDetailContainer, ProjDescSection, ProjSkillsSection, ProjSkills, ProjSkill, ProjDesc, HomeProjTitle } from '../styled/projStyles';

const ProjectDetails = () => {
  const location = useLocation();

  const { name, img, desc, github, liveSite, stack } = location.state
  return(
    <>
      <Header img={img} text={name} />
      <ProjDetailContainer>
        <ProjDescSection>
          <HomeProjTitle>Project Description</HomeProjTitle>
          <ProjDesc>{desc}</ProjDesc>
        </ProjDescSection>
        <ProjSkillsSection>
          <HomeSubTitle>Built With</HomeSubTitle>
          <ProjSkills>
            { stack.map( tool => <ProjSkill>{tool}</ProjSkill>)}
          </ProjSkills>
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