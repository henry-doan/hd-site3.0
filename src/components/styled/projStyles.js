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