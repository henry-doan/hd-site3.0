import styled from "styled-components";

export const Form = styled.form`
  width: 500px;
  height: 600px;
  // background: white;
  border-radius: 8px;
  margin: 0 auto;
  padding: 20px 30px;
  // max-width: calc(100vw - 40px);
  box-sizing: border-box;
  font-family: 'Montserrat',sans-serif;
  position: relative;
  display: block;
  text-align: center;
`

export const ContactTextInput = styled.input`
  padding: 30px;
  border: 0;
  width: 380px;
  font-size: 16px;
  background-color: #222222;
  color: white;
  border-radius: 4px;
  margin-bottom: 10px;
`

export const ContactTextArea = styled.textarea`
  padding: 30px;
  border: 0;
  width: 380px;
  font-size: 16px;
  background-color: #222222;
  color: white;
  border-radius: 4px;
  margin-bottom: 10px;
`

export const ContactContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const ContactLeft = styled.div`
  flex: 60%;

  @media (max-width: 768px) {
    flex: 100%;
  }
`

export const ContactRight = styled.div`
  flex: 40%;

  @media (max-width: 768px) {
    flex: 100%;
  }
`

export const CardContainer = styled.div`
  height: 350px;
  width: 600px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.5s;
  transform-style: preserve-3d;
  position: relative;
  background: white;
`

export const FrontCard = styled.div`
  z-index: 2;
  transform: rotateY(0deg);
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items; center;
`

export const FrontLogo = styled.img`
  width: 350px;
`