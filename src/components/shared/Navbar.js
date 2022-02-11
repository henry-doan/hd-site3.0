import { SideNav, SideNavItem, SideNavIcon, LogoImg, LogoContainer } from '../styled/navStyles';
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
  </SideNav>
)

export default Navbar;