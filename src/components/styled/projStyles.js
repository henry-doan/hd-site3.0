import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ProjInnerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  box-sizing: border-box;
  padding: 40px;
  border: 4px solid #00DCF9;

  @media (min-width: 768px) {
    width: 50%;
    height: 100%;
  }
`

export const ProjCard = styled(Link)`
  flex: 40%;
  padding: 10px;
  margin: 20px;
  height: 300px;
  background-image: url(${ props => props.img });;
  background-size: cover;
  border: 4px solid #00DCF9;
  background-color: "#aaa";
  padding: 20px;
  display: flex;
  align-items: flex-start;
  text-decoration: none;
  
  &:hover {
    transform: translateY(0) scale(1.1);
  }

  &:hover ${ProjInnerCard} {
    transform: rotate(-8deg);
  }

  @media (max-width: 768px) {
    flex: 100%;
  }
`

export const ProjCardTitle = styled.h2`
  font-size: 24px;
  text-align: center;
  font-weight: 700;
  color: #00DCF9;
  position: relative;
  margin: 0 0 20px 0;
`

export const ProjCardSubtitle = styled.p`
  font-size: 18px;
  text-align: center;
  font-weight: 400;
  color: black;
  position: relative;
`

export const ProjectsContainer = styled.div`
  // display: flex;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  @media (max-width: 768px) {
    // flex-wrap: wrap;
    flex-direction: column;
  }
`

export const ProjDetailContainer = styled.div`
  background-color: transparent;
  border-radius: 10px;
  box-shadow: 0 10px 10px rgb(0 0 0 / 20%);
  display: flex;
  max-width: 100%;
  margin: 20px;
  overflow: hidden;
  padding: 25px;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const ProjDescSection = styled.div`
  flex: 60%;

  @media (max-width: 768px) {
    flex: 100%;
  }
`

export const ProjSkillsSection = styled.div`
  flex: 40%;
  text-align: center;

  @media (max-width: 768px) {
    flex: 100%;
  }
`

export const ProjSkills = styled.ul`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  margin: 25px 0px 15px;
  padding: 0px;
  list-style: none;
`

export const ProjSkill = styled.li`
  margin: 5px 20px;
`

export const ProjDesc = styled.p`
  font-weight: 300;
  font-size: 1.5em;
  line-height: 35px;
`
export const HomeProjContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 5px;
  max-width: 1000px;
  margin: 100px auto;
`

export const HomeProjSec = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  padding: 0 5px;
`

export const HomeProjLeft = styled.div`
  flex: 50%;
  position: relative;

  @media (max-width: 768px) {
    flex: 100%;
  }
`

export const HomeProjRight = styled.div`
  flex: 50%;

  @media (max-width: 768px) {
    flex: 100%;
  }
`

export const Rect = styled.div`
  width: 350px;
  height: 250px;
  position: absolute;

  @media (max-width: 768px) {
    width: 250px;
    height: 150px;
    margin-left: 60px;
  }
`

export const RectOne = styled(Rect)`
  background: #0B383F;
  z-index: 1;
  border: 4px solid #0BE3C1;
  opacity: 0.5;
`

export const RectTwo = styled(Rect)`
  top: 30px;
  left: 30px;
  background: #23BAD9;
  z-index: 2;
  border: 4px solid #0BE3C1;
  opacity: 0.5;
`

export const RectThree = styled(Rect)`
  top: 60px;
  left: 60px;
  background: #0B91E3;
  z-index: 3;
  border: 4px solid #0DFD93;
  opacity: 0.9;
`

export const RectFour = styled(Rect)`
  top: 90px;
  left: 90px;
  background: #00DCF9;
  z-index: 4;
  border: 4px solid #00DCF9;
`

export const FeaturedProj = styled(LazyLoadImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
  z-index: 5;
  filter: blur(1px);
`

export const HomeProjText = styled.div`
  text-align: center;
  margin: 0 auto;
  margin-top: 100px;

  @media (max-width: 1400px) {
    margin-top: 400px;
  }

  @media (max-width: 1000px) {
    
  }
`

export const HomeProjTitle = styled.h1`
  text-decoration: underline;
  -webkit-text-decoration-color: #00DCF9; 
  text-decoration-color: #00DCF9;
  text-underline-offset: 10px;
  margin-bottom: 30px;
`

export const HomeProjPara = styled.p`
  padding: 0.01em 36px;
  line-height: 25px;
  font-size: 20px;
  margin-bottom: 40px;

  @media (max-width: 1400px) {
    padding: 0.01em 16px;
  }

  @media (max-width: 1000px) {
    padding: 16px;
  }
`