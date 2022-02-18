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
  opacity: 0.75;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
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
    background: #2196f3;
    box-shadow: 0 0 10px #2196f3, 0 0 40px #2196f3, 0 0 80px #2196f3;
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