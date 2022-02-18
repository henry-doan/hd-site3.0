import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProjCard = styled.div`
  flex: 50%;
  padding: 10px;
  margin: 20px;
  height: 300px;
  background-image: url(https://images.unsplash.com/photo-1516051662687-567d7c4e8f6a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80);
  background-size: cover;
  border: 4px solid #00DCF9;
  background-color: "#aaa";
  padding: 20px;
  display: flex;
  align-items: flex-end;
  
  @media (max-width: 768px) {
    flex: 100%;
  }
`

export const ProjInnerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  box-sizing: border-box;
  padding: 40px;

  @media (min-width: 768px) {
    width: 50%;
    height: 100%;
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
  display: flex;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`