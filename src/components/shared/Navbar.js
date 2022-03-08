import { SideNav, SideNavItem, SideNavIcon, LogoImg, LogoContainer, SideNavItemA, SmallNav, SmallNavItem, SmallNavItemA, SmallNavIcon } from '../styled/navStyles';
import Logo from '../../images/Logo.png';

const Navbar = () => (
  <>
    <SideNav>
      <LogoContainer>
        <LogoImg src={Logo} alt="logo" />
      </LogoContainer>
      <SideNavItem to="/">
        <SideNavIcon className="fa fa-home"></SideNavIcon>
        <p>
          Home
        </p>
      </SideNavItem>
      <SideNavItem to="/projects">
        <SideNavIcon className="fa fa-code"></SideNavIcon>
        <p>
          Projects
        </p>
      </SideNavItem>
      <SideNavItem to="/contact">
        <SideNavIcon className="fa fa-envelope"></SideNavIcon>
        <p>
          Contact
        </p>
      </SideNavItem>
      <SideNavItem to="/resume">
        <SideNavIcon className="fa fa-file-code-o"></SideNavIcon>
        <p>
          RESUMÉ
        </p>
      </SideNavItem>
      <SideNavItemA href="https://hd-blog-henry-doan.vercel.app/" target="_blank" rel="noopener noreferrer">
        <SideNavIcon className="fa fa-terminal"></SideNavIcon>
        <p>
          Blog
        </p>
      </SideNavItemA>
      <SideNavItemA href="https://hd-coding.netlify.app/" target="_blank" rel="noopener noreferrer">
        <SideNavIcon className="fa fa-youtube"></SideNavIcon>
        <p>
          Videos
        </p>
      </SideNavItemA>
    </SideNav>
    <SmallNav>
      <SmallNavItem to="/">
        <SmallNavIcon className="fa fa-home"></SmallNavIcon>
        HOME
      </SmallNavItem>
      <SmallNavItem to="/projects">
        <SmallNavIcon className="fa fa-code"></SmallNavIcon>
        PROJECTS
      </SmallNavItem>
      <SmallNavItem to="/contact">
        <SmallNavIcon className="fa fa-envelope"></SmallNavIcon>
        CONTACT
      </SmallNavItem>
      <SmallNavItem to="/resume">
        <SmallNavIcon className="fa fa-file-code-o"></SmallNavIcon>
        RESUMÉ
      </SmallNavItem>
      <SmallNavItemA href="https://hd-blog-henry-doan.vercel.app/" target="_blank" rel="noopener noreferrer">
        <SmallNavIcon className="fa fa-terminal"></SmallNavIcon>
        BLOG
      </SmallNavItemA>
      <SmallNavItemA href="https://hd-coding.netlify.app/" target="_blank" rel="noopener noreferrer">
        <SmallNavIcon className="fa fa-youtube"></SmallNavIcon>
        VIDEO
      </SmallNavItemA>
    </SmallNav>
  </>
)

export default Navbar;