import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <>
    <NavLink to="/">
      Home
    </NavLink>
    <NavLink to="/about">
      About
    </NavLink>
    <NavLink to="/projects">
      Projects
    </NavLink>
    <NavLink to="/contact">
      Contact
    </NavLink>
  </>
)

export default Navbar;