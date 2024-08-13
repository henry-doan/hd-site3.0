import { Slide } from 'react-reveal';

import Logo from '../../images/LogoSquare.png';
import { BottomBtn, ExtraPgContainer, ExtraPgPic, HLink, LtBtn, RtBtn, TopBtn } from '../styled/sharedStyles';

const ThankYou = () => (
  <ExtraPgContainer>
    <Slide top>
      <ExtraPgPic 
        src={Logo} 
        alt='logo'
        effect="blur"
      />
    </Slide>
    <Slide bottom>
      <h1>Thank You For Your Submission</h1>
    </Slide>
    <Slide top>
      <h3>I Will Get In Touch With You Soon!</h3>
    </Slide>
    <Slide bottom>
      <HLink to="/">
        <TopBtn></TopBtn>
        <RtBtn></RtBtn>
        <BottomBtn></BottomBtn>
        <LtBtn></LtBtn>
        Take Me Home
      </HLink>
    </Slide>
  </ExtraPgContainer>
)

export default ThankYou;