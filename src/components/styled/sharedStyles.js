import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MainContainer = styled.div`
  margin-left: 120px;
  // padding: 12px 24px !important;
  color: white;
  background-color: black;
  height: 100vh;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 80px;
  }
`

export const MainHeader = styled.div`
  background-image: url(${ props => props.img });
  min-height: 80%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    background-image: url(${ props => props.mobileImg });
    backgroung-position: center center;
    background-size: contain;
  }
`

export const MainHeaderContainer = styled.div`
  white-space: nowrap;
`
  
export const MainHeaderText = styled.span`
  letter-spacing: 10px;
  color: #fff;
  background-color: #000;
  padding: 12px 24px;
  text-align: center;
  font-size: 24px;
`

export const LogoRound = styled.img`
  width: 300px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
  display: block;
  max-width: 100%;
  background-color: white;
  border-style: none;
`

export const SharedContainer = styled.div`
  padding: 100px;

  @media (max-width: 768px) {
    padding: 0;
  }
`

export const TopBtn = styled.span`
  position: absolute;
  display: block;
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, white);
`

export const BottomBtn = styled.span`
  position: absolute;
  display: block;
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, white);
`

export const RtBtn = styled.span`
  position: absolute;
  display: block;
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, white);
`

export const LtBtn = styled.span`
  position: absolute;
  display: block;
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, white);
`

export const MainBtn = styled.button`
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #DEFCFD;
  background: transparent;
  letter-spacing: 4px;
  text-decoration: none;
  font-size: 18px;
  overflow: hidden;
  transition: 0.2s;
  border: 1px solid white;

  &:hover {
    color: white;
    background: #00DCF9;
    box-shadow: 0 0 10px #00DCF9, 0 0 40px #00DCF9, 0 0 80px #00DCF9;
    transition-delay: 1s;
  }

  &:hover ${TopBtn} {
    left: 100%;
    transition: 1s;
  }

  &:hover ${BottomBtn} {
    right: 100%;
    transition: 1s;
    transition-delay: 0.5s;
  }

  &:hover ${RtBtn} {
    top: 100%;
    transition: 1s;
    transition-delay: 0.25s;
  }

  &:hover ${LtBtn} {
    bottom: 100%;
    transition: 1s;
    transition-delay: 0.75s;
  }
`

export const HBtn = styled.a`
  position: relative;
  display: inline-block;
  padding: 15px 30px;
  color: white;
  text-transform: uppercase;
  letter-spacing: 4px;
  text-decoration: none;
  overflow: hidden;
  transition: 0.2s;
  border: 1px solid white;
  margin: 0px 0px 5px 20px;

  &:hover {
    color: white;
    background: #00DCF9;
    box-shadow: 0 0 10px #00DCF9, 0 0 40px #00DCF9, 0 0 80px #00DCF9;
    transition-delay: 1s;
  }

  &:hover ${TopBtn} {
    left: 100%;
    transition: 1s;
  }

  &:hover ${BottomBtn} {
    right: 100%;
    transition: 1s;
    transition-delay: 0.5s;
  }

  &:hover ${RtBtn} {
    top: 100%;
    transition: 1s;
    transition-delay: 0.25s;
  }

  &:hover ${LtBtn} {
    bottom: 100%;
    transition: 1s;
    transition-delay: 0.75s;
  }
`

export const HLink = styled(Link)`
  position: relative;
  display: inline-block;
  padding: 15px 30px;
  color: white;
  text-transform: uppercase;
  letter-spacing: 4px;
  text-decoration: none;
  overflow: hidden;
  transition: 0.2s;
  border: 1px solid #00DCF9;
  margin: 0px 0px 5px 20px;

  &:hover {
    color: white;
    background: #00dcf941;
    box-shadow: 0 0 10px #00DCF9, 0 0 40px #00DCF9, 0 0 80px #00DCF9;
    transition-delay: 1s;
    border: 1px solid white;
  }

  &:hover ${TopBtn} {
    left: 100%;
    transition: 1s;
  }

  &:hover ${BottomBtn} {
    right: 100%;
    transition: 1s;
    transition-delay: 0.5s;
  }

  &:hover ${RtBtn} {
    top: 100%;
    transition: 1s;
    transition-delay: 0.25s;
  }

  &:hover ${LtBtn} {
    bottom: 100%;
    transition: 1s;
    transition-delay: 0.75s;
  }
`

export const HomeTitle = styled.h1`
  text-decoration: underline;
  -webkit-text-decoration-color: #00DCF9; 
  text-decoration-color: #00DCF9;
  text-underline-offset: 10px;
  max-width: 1000px;
  margin: 0 auto 50px auto;

  @media (max-width: 768px) {
    margin-left: 15px;
  }
`

export const HomeSubTitle = styled.h2`
  text-decoration: underline;
  -webkit-text-decoration-color: #00DCF9; 
  text-decoration-color: #00DCF9;
  text-underline-offset: 10px;
  max-width: 1000px;
  margin: 0 auto 50px auto;
`

export const FooterContainer = styled.div`
  bottom: 0;
  position: fixed;
  width: 100%;
  z-index: 1;
  color: #fff;
  background-color: #000;
  text-align: right;
  opacity: 0.40;
  overflow: hidden;
  font-weight: 800;

  @media (max-width: 768px) {
    text-align: center;
  }
`

export const FooterText = styled.h1`
  font-size: 18px;
  padding: 5px;
  margin: 5px;
  // text-align: center;
  // @media (max-width: 768px) {
  //   text-align: center;
  // }
`