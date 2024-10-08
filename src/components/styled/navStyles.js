import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

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

  @media (max-width: 768px) {
    display: none !important;
  }
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
  font-size: 12px;
  line-height: 1.5;
  margin-top: 30px;
  padding-top: 10px;

  &:hover {
    background-color: black;
    color: #00DCF9;
  }
`

export const SideNavItemA = styled.a`
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
  font-size: 12px;
  line-height: 1.5;
  margin-top: 30px;
  padding-top: 10px;

  &:hover {
    background-color: black;
    color: #00DCF9;
  }
`

export const SideNavIcon = styled(FontAwesomeIcon)`
  font-size: 30px !important;
`

export const LogoImg = styled(LazyLoadImage)`
  width: 100%;
  vertical-align: middle;
  border-style: none;
  padding-top: 30px;
`

export const LogoContainer = styled.div`
  padding-left: 7px;
  padding-right: 7px;
`

export const SmallNav = styled.div`
  top: 0;
  position: fixed;
  width: 100%;
  z-index: 1;
  color: #fff;
  background-color: #000;
  text-align: center;
  font-size: 14px;
  opacity: 0.60;
  overflow: hidden;
  font-weight: 800;

  @media (min-width: 768px) {
    display: none !important;
  }
`

export const SmallNavItem = styled(Link)`
  width: 25% !important;
  white-space: normal;
  padding: 8px 16px;
  float: left;
  border: none;
  display: block;
  outline: 0;
  user-select: none;
  vertical-align: middle;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  background-color: inherit;
  text-align: center;
  cursor: pointer;
`

export const SmallNavItemA = styled.a`
  width: 25% !important;
  white-space: normal;
  padding: 8px 16px;
  float: left;
  border: none;
  display: block;
  outline: 0;
  user-select: none;
  vertical-align: middle;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  background-color: inherit;
  text-align: center;
  cursor: pointer;
`

export const SmallNavIcon = styled(FontAwesomeIcon)`
  margin-right: 5px;
`