import { Slide } from 'react-reveal';

import Logo from '../../images/LogoSquare.png';
import { BottomBtn, ExtraPgContainer, ExtraPgPic, HLink, LtBtn, RtBtn, TopBtn } from '../styled/sharedStyles';

const PrivateProject = () => (
  <ExtraPgContainer>
    <Slide top>
      <ExtraPgPic 
        src={Logo} 
        alt='logo' 
        effect="blur"
      />
    </Slide>
    <Slide bottom>
      <h1>Sorry, This Project's Code Base Is Private Due To The Client's Request</h1>
    </Slide>
    <Slide top>
      <h3>If you want to talk more about this project, shoot me a message here!</h3>
    </Slide>
    <Slide bottom>
      <HLink to="/contact">
        <TopBtn></TopBtn>
        <RtBtn></RtBtn>
        <BottomBtn></BottomBtn>
        <LtBtn></LtBtn>
        Contact
      </HLink>
    </Slide>
    <Slide top>
      <h3>Or go back to projects here</h3>
    </Slide>
    <Slide bottom>
      <HLink to="/projects">
        <TopBtn></TopBtn>
        <RtBtn></RtBtn>
        <BottomBtn></BottomBtn>
        <LtBtn></LtBtn>
        Projects
      </HLink>
    </Slide>
  </ExtraPgContainer>
)

export default PrivateProject;