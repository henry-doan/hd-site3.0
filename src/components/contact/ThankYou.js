import Logo from '../../images/LogoSquare.png'
import { TYContainer, TYPic } from '../styled/contactStyles';
import { HLink, TopBtn, RtBtn, BottomBtn, LtBtn } from '../styled/sharedStyles';

const ThankYou = () => (
  <TYContainer>
    <TYPic src={Logo} alt='logo'/>
    <h1>Thank You For Your Submission</h1>
    <h3 >I Will Get In Touch With You Soon!</h3>
    <HLink to="/">
      <TopBtn></TopBtn>
      <RtBtn></RtBtn>
      <BottomBtn></BottomBtn>
      <LtBtn></LtBtn>
      Take Me Home
    </HLink>
  </TYContainer>
)

export default ThankYou;