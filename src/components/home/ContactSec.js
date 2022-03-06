import { HLink, TopBtn, RtBtn, BottomBtn, LtBtn } from '../styled/sharedStyles';
import { ContactSecContainer, ContactSecPara, ContactSecTitle } from '../styled/aboutStyles';

const ContactSec = () => (
  <ContactSecContainer>
    <ContactSecTitle>Get In Touch!</ContactSecTitle>
    <ContactSecPara>
      Have questions or want to connect? Whether you are interested in collaborating or come to say Hi, I am always available for a quick chat.
    </ContactSecPara>
    <HLink to="/contact">
      <TopBtn></TopBtn>
      <RtBtn></RtBtn>
      <BottomBtn></BottomBtn>
      <LtBtn></LtBtn>
      Contact Me
    </HLink>
  </ContactSecContainer>
)

export default ContactSec;