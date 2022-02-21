import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  // width: 1200px;
  // border: 2px solid #00DCF9;
  padding: 25px;

  // color: #00DCF9;
  color: white;
  // text-align: center;

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
  // font-size: 1.25em;
`

export const ProjDesc = styled.p`
  font-weight: 300;
  font-size: 1.5em;
  line-height: 35px;
`