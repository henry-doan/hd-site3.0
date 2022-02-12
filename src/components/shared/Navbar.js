import { SideNav, SideNavItem, SideNavIcon, LogoImg, LogoContainer, SideNavItemA } from '../styled/navStyles';
import Logo from '../../images/Logo.png';

const Navbar = () => (
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
    <SideNavItem to="/about">
      <SideNavIcon className="fa fa-user"></SideNavIcon>
      <p>
        About
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
)

export default Navbar;