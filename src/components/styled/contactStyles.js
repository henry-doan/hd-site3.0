import { LazyLoadImage } from 'react-lazy-load-image-component';
import styled from "styled-components";

export const Form = styled.form`
  width: 500px;
  height: 600px;
  border-radius: 8px;
  margin: 0 auto;
  padding: 20px 30px;
  box-sizing: border-box;
  font-family: 'Montserrat',sans-serif;
  position: relative;
  display: block;
  text-align: center;
  
  @media (max-width: 768px) {
    width: 350px;
  }
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

  @media (max-width: 768px) {
    width: 250px;
    font-size: 14px;
    padding: 20px;
  }

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

  @media (max-width: 768px) {
    width: 250px;
    font-size: 14px;
    padding: 20px;
  }
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
  background-color: transparent;
  width: 600px;
  height: 350px;
  perspective: 1000px;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 350px;
    height: 200px;
    perspective: 1000px;
    margin: 0 auto;
  }
`

export const CardContainerInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;

  &:hover {
    transform: rotateY(180deg);
  }
`

export const FrontCard = styled.div`
  display: flex;
  justify-content: center;
  align-items; center;
  position: absolute;
  width: 100%;
  height: 100%;
  background: white;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`

export const FrontLogo = styled(LazyLoadImage)`
  width: 350px;

  @media (max-width: 768px) {
    width: 250px;
  }
`

export const BackCard = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  background: white;
  display: flex;
`

export const BackName = styled.h1`
  margin-top: 5%;
  color: #00DCF9;
  margin-left: 50px;
  font-size: 36px;
  margin-bottom: 5px;
  font-weight: 500;

  @media (max-width: 768px) {
    margin-left: 25px;
    margin-bottom: 3px;
    font-size: 14px;
  }
`

export const BackTitle = styled.p`
  font-size: 16px;
  padding-bottom: 15px;
  width: 35%;
  border-bottom: 2px solid #00DCF9;
  color: #00DCF9;
  margin-left: 50px;

  @media (max-width: 768px) {
    margin-left: 25px;
    font-size: 10px;
    padding-bottom: 5px;
    border-bottom: 1px solid #00DCF9;
  }
`

export const BackText = styled.p`
  color: #00DCF9;
  margin-left: 50px;

  @media (max-width: 768px) {
    margin-left: 25px;
    font-size: 10px;
  }
`

export const BackSocial = styled.a`
  position: relative;
  color: #00DCF9;
  font-size: 24px;
  height: 30px;
  width: 35px;
  padding: 5px;
  top: 30px;
  left: 45px;
  display: inline-block;
  border: 2px solid #00DCF9;
  margin: 0 5px;
  text-align: center;
  cursor: pointer;
  -webkit-transition: all ease 0.5s;
  -moz-transition: all ease 0.5s;
  transition: all ease 0.5s;

  &:hover {
    box-shadow: inset 0 50px 0 0 #00DCF9;
    color: white;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    height: 20px;
    width: 25px;
    padding: 2px;
    top: 20px;
    left: 30px;
  }
`

export const BackLeft = styled.div`
  flex: 20%;
  background: #222222;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const BackImg = styled(LazyLoadImage)`
  width: 100px;
`

export const BackRight = styled.div`
  flex: 80%;
`