import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faCode, faEnvelope, faFileCode, faHome, faTerminal } from '@fortawesome/free-solid-svg-icons';

import Logo from '../../images/Logo.png';
import { LogoContainer, LogoImg, SideNav, SideNavIcon, SideNavItem, SideNavItemA, SmallNav, SmallNavIcon, SmallNavItem, SmallNavItemA } from '../styled/navStyles';

const Navbar = () => (
  <>
    <SideNav>
      <LogoContainer>
        <LogoImg 
          src={Logo} 
          alt="logo" 
          effect="blur"
        />
      </LogoContainer>
      <SideNavItem to="/">
        <SideNavIcon icon={faHome} />
        <p>
          Home
        </p>
      </SideNavItem>
      <SideNavItem to="/projects">
        <SideNavIcon icon={faCode} />
        <p>
          Projects
        </p>
      </SideNavItem>
      <SideNavItem to="/contact">
        <SideNavIcon icon={faEnvelope} />
        <p>
          Contact
        </p>
      </SideNavItem>
      <SideNavItemA href="https://docs.google.com/document/d/1KzT5Ejc1KZzDdvNuFdYJ3JyIKXcz2eTYJ_VRPa8_JO8/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
        <SideNavIcon icon={faFileCode} />
        <p>
          RESUMÉ
        </p>
      </SideNavItemA>
      <SideNavItemA href="https://hd-blog-henry-doan.vercel.app/" target="_blank" rel="noopener noreferrer">
        <SideNavIcon icon={faTerminal} />
        <p>
          Blog
        </p>
      </SideNavItemA>
      <SideNavItemA href="https://hd-coding.netlify.app/" target="_blank" rel="noopener noreferrer">
        <SideNavIcon icon={faYoutube} />
        <p>
          Videos
        </p>
      </SideNavItemA>
    </SideNav>
    <SmallNav>
      <SmallNavItem to="/">
        <SmallNavIcon icon={faHome} />
        HOME
      </SmallNavItem>
      <SmallNavItem to="/projects">
        <SmallNavIcon icon={faCode} />
        PROJECTS
      </SmallNavItem>
      <SmallNavItem to="/contact">
        <SmallNavIcon icon={faEnvelope} />
        CONTACT
      </SmallNavItem>
      <SmallNavItemA href="https://docs.google.com/document/d/1uV-iyxnuHtep7nX9MV4fet8STJEgL3JhbUGZNMtcZPA/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
        <SmallNavIcon icon={faFileCode} />
        RESUMÉ
      </SmallNavItemA>
      <SmallNavItemA href="https://hd-blog-henry-doan.vercel.app/" target="_blank" rel="noopener noreferrer">
        <SmallNavIcon icon={faTerminal} />
        BLOG
      </SmallNavItemA>
      <SmallNavItemA href="https://hd-coding.netlify.app/" target="_blank" rel="noopener noreferrer">
        <SmallNavIcon icon={faYoutube} />
        VIDEO
      </SmallNavItemA>
    </SmallNav>
  </>
)

export default Navbar;