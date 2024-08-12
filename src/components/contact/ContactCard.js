import { faGithub, faInstagram, faLinkedin, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faArrowPointer, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Flip } from 'react-reveal';
import Logo from '../../images/Logo.png';
import { BackCard, BackImg, BackLeft, BackName, BackRight, BackSocial, BackText, BackTitle, CardContainer, CardContainerInner, FrontCard, FrontLogo } from '../styled/contactStyles';
import { HomeProjTitle } from '../styled/projStyles';

const ContactCard = () => (
  <>
    <Flip top>
      <HomeProjTitle>My Card</HomeProjTitle>
    </Flip>
    <CardContainer>
      <CardContainerInner>
        <FrontCard>
          <FrontLogo 
            src="https://res.cloudinary.com/doan/image/upload/v1597276217/logo_vwe97g.png" 
            alt='logo' 
            effect="blur"
          />
        </FrontCard>
        <BackCard>
          <BackLeft>
            <BackImg
              src={Logo} 
              alt="logo" 
              effect="blur"
            />
          </BackLeft>
          <BackRight>
            <BackName>Henry Doan</BackName>
            <BackTitle>Full Stack Web Developer</BackTitle>
            <BackText>
             <FontAwesomeIcon icon={faPhone} /> 801-584-9392
            </BackText>
            <BackText>
              <FontAwesomeIcon icon={faEnvelope} /> henrydoan96@gmail.com
            </BackText>
            <BackText>
              <FontAwesomeIcon icon={faArrowPointer} /> https://henry-doan.netlify.app/
            </BackText>
            <BackSocial href="https://github.com/henry-doan/" target="_blank" el="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </BackSocial>
            <BackSocial href="https://www.youtube.com/channel/UC1R4U_9mDr3T240TKoCOUFw" target="_blank" el="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} />
            </BackSocial>
            <BackSocial href="https://www.linkedin.com/in/henrydoan/" target="_blank" el="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </BackSocial>
            <BackSocial href="https://x.com/nightwing819" target="_blank" el="noopener noreferrer">
              <FontAwesomeIcon icon={faXTwitter} />
            </BackSocial>
            <BackSocial href="https://www.instagram.com/hdcoding/" target="_blank" el="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </BackSocial>
          </BackRight>
        </BackCard>
      </CardContainerInner>
    </CardContainer>
  </>
)

export default ContactCard;