import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 5px;
  max-width: 1000px;
  margin: 0 auto;
`

export const AboutSec = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 5px;
`

export const AboutLeft = styled.div`
  flex: 60%;

  @media (max-width: 768px) {
    flex: 100%;
  }
`

export const AboutRight = styled.div`
  flex: 40%;

  @media (max-width: 768px) {
    flex: 100%;
  }
`

export const AboutPara = styled.p`
  padding: 0 20px;
`

export const AboutTitle = styled.h3`
  color: #00DCF9;
  padding: 0 16px;
  font-weight: 900;
  margin: 10px 0;
`

export const AboutMainIcon = styled.i`
  color: #00DCF9;
  margin-right: 16px;
  font-size: 20px;
  font-weight: 900;
`

export const WorkExpSection = styled.div`
  color: white;
  background-color: transparent;
`

export const WorkExpSingle = styled.div`
  // padding: 0.01em 16px;
`

export const WorkTitle = styled.h5`
  font-weight: 900;
  margin: 10px 0;
  font-size: 18px;
`

export const DateSec = styled.h4`
  color: #00DCF9;
  font-weight: 900;
  margin: 10px 0;
`

export const DateIcon = styled.i`
  color: #00DCF9;
  margin-right: 16px;
`

export const CurrentDate = styled.span`
  color: #fff;
  background-color: #00DCF9;
  border-radius: 4px;
  display: inline-block;
  padding-left: 8px;
  padding-right: 8px;
  text-align: center;
`

export const Line = styled.hr`
  border: 0;
  border-top: 1px solid #00DCF9;
  margin: 150px auto;
  box-sizing: content-box;
  height: 0;
  overflow: visible;
  width: 500px;
  opacity: 0.6;

  @media (max-width: 768px) {
    width: 250px;
  }
`

export const SkillsContainer = styled.div`
  color: #00DCF9;
  background-color: #fff;
  margin: 16px;
`
  
export const AvatarSec = styled.div` 
  display: inline-block;
  position: relative;

  &:after {
    z-index: -1;
    position: absolute;
    bottom: -5%;
    right: -5%;
    width: 100%;
    height: 100%;
    border: 4px solid #00DCF9;
    content: '';
  }

  @media (max-width: 1000px) {
    &:after {
      bottom: 0;
      right: 0;
      width: 0;
      height: 0;
      border: none;
    }
  }
`

export const AvatarImgContainer = styled.div`
  background-color: #00DCF9;
  width: 100%;
  margin: 0 auto;
`

export const AvatarImg = styled.img`
  width: 100%;
  object-fit: cover;
  height: 400px;
  vertical-align: middle;
  z-index: 2;
  filter: opacity(50%);
  transition: opacity .25s linear;

  @media (max-width: 1000px) {
    border: 4px solid #00DCF9;
    width: 98%;
  }
`

export const NameTitle = styled.h1`
  font-weight: 900;
  font-size: 30px;
  color: white;
`

export const SkillsSec = styled.div`
  padding: 0.01em 16px;
`

export const ContactSecContainer = styled.div`
  text-align: center;
  padding: 0.01em 16px;
  margin: 40px 0;
`

export const ContactSecPara = styled.p`
  padding: 0.01em 450px;
  line-height: 25px;
  font-size: 20px;
  margin-bottom: 40px;

  @media (max-width: 1400px) {
    padding: 0.01em 250px;
  }

  @media (max-width: 1000px) {
    padding: 0;
  }
`

export const ContactSecTitle = styled.h1`
  text-decoration: underline;
  -webkit-text-decoration-color: #00DCF9; 
  text-decoration-color: #00DCF9;
  text-underline-offset: 10px;
  margin-bottom: 30px;
`

export const AboutLink = styled(Link)`
  color: #00DCF9;
  font-weight: 700;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    text-decoration-color: #00DCF9;
  }
`

export const AboutOutSourceLink = styled.a`
  color: #00DCF9;
  font-weight: 700;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    text-decoration-color: #00DCF9;
  }
`

export const BtnContainer = styled.div`
  margin: 50px auto 0 auto;
`

export const EduPic = styled.img`
  width: 400px;
`