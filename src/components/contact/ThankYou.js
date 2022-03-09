import Logo from '../../images/LogoSquare.png'
import { TYContainer, TYPic } from '../styled/contactStyles';
import { HLink, TopBtn, RtBtn, BottomBtn, LtBtn } from '../styled/sharedStyles';
import { Slide } from 'react-reveal';

const ThankYou = () => (
  <TYContainer>
    <Slide top>
      <TYPic src={Logo} alt='logo'/>
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
  </TYContainer>
)

export default ThankYou;