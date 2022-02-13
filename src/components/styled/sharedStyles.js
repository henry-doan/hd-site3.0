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
  color: #fff!important;
  background-color: #000!important;
  padding: 12px 24px!important;
  text-align: center;
  font-size: 24px!important;
`