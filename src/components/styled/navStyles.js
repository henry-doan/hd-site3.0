import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SideNav = styled.nav`
  width: 120px;
  background: #222222;
  text-align: center !important;
  font-size: 12px
  height: 100%;
  position: fixed;
  z-index: 1;
  overflow: auto;
  display: block;
  color: white;
  height: 100vh;
`

export const SideNavItem = styled(NavLink)`
  text-align: center !important;
  width: 100%;
  display: block;
  border: none;
  white-space: normal;
  float: none;
  outline: 0;
  color: white;
  background-color: #222222;
  vertical-align: middle;
  overflow: hidden;
  text-decoration: none;
  cursor: pointer;
  font-size: 12px
  line-height: 1.5;
  margin-top: 30px;
  padding-top: 10px;

  &:hover {
    background-color: black;
    color: #00DCF9;
  }
`

export const SideNavIcon = styled.i`
  font-size: 36px !important;
`

export const LogoImg = styled.img`
  width: 100%;
  vertical-align: middle;
  border-style: none;
  padding-top: 30px;
`

export const LogoContainer = styled.div`
  padding-left: 7px;
  padding-right: 7px;
`