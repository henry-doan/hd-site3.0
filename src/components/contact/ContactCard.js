import { CardContainer, FrontCard, FrontLogo, BackCard, BackTitle, BackName, CardContainerInner, BackText, BackSocial, BackLeft, BackRight, BackImg } from '../styled/contactStyles';
import Logo from '../../images/Logo.png';
import { HomeProjTitle } from '../styled/projStyles';
import { Flip } from 'react-reveal';

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
              <i className='fa fa-phone'></i> 801-584-9392
            </BackText>
            <BackText>
              <i className='fa fa-envelope'></i> henrydoan96@gmail.com
            </BackText>
            <BackText>
              <i className='fa fa-mouse-pointer'></i> https://henry-doan.netlify.app/
            </BackText>
            <BackSocial href="https://github.com/henry-doan/" target="_blank" el="noopener noreferrer">
              <i className="fa fa-github"></i>
            </BackSocial>
            <BackSocial href="https://www.youtube.com/channel/UC1R4U_9mDr3T240TKoCOUFw" target="_blank" el="noopener noreferrer">
              <i className="fa fa-youtube-play"></i>
            </BackSocial>
            <BackSocial href="https://www.linkedin.com/in/henrydoan/" target="_blank" el="noopener noreferrer">
              <i className="fa fa-linkedin"></i>
            </BackSocial>
            <BackSocial href="https://twitter.com/@nightwing819/" target="_blank" el="noopener noreferrer">
              <i className="fa fa-twitter"></i>
            </BackSocial>
            <BackSocial href="https://www.instagram.com/hdcoding/" target="_blank" el="noopener noreferrer">
              <i className="fa fa-instagram"></i>
            </BackSocial>
          </BackRight>
        </BackCard>
      </CardContainerInner>
    </CardContainer>
  </>
)

export default ContactCard;