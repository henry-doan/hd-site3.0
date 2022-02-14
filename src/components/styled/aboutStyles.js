import styled from 'styled-components';

export const AboutContainer = styled.div`
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

export const AboutTitle = styled.h2`
  color: #00DCF9;
  padding: 0 16px;
  font-weight: 400;
  margin: 10px 0;
`

export const AboutMainIcon = styled.i`
  color: #00DCF9;
  margin-right: 16px;
  font-size: 36px;
`

export const WorkExpSection = styled.div`
  color: #000;
  background-color: #fff;
  margin-bottom: 16px;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
  padding: 0.01em 16px;
`

export const WorkExpSingle = styled.div`
  padding: 0.01em 16px;
`

export const WorkTitle = styled.h5`
  opacity: 0.60;
  font-weight: 400;
  margin: 10px 0;
  font-size: 18px;
`

export const DateSec = styled.h4`
  color: #00DCF9;
  font-weight: 400;
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
  border-top: 1px solid #eee;
  margin: 20px 0;
  box-sizing: content-box;
  height: 0;
  overflow: visible;
`

export const SkillsContainer = styled.div`
  color: #00DCF9;
  background-color: #fff;
  box-shadow: 0 4px 10px 0 rgb(0 0 0 / 20%), 0 4px 20px 0 rgb(0 0 0 / 19%);
  margin: 16px;
`
  
export const AvatarSec = styled.div` 
  position: relative;
  display: block;
`

export const AvatarImg = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: 100% 0;
  height: 400px;
  vertical-align: middle;
  border-style: none;
  filter: opacity(60%);
`

export const AvatarText = styled.div`
  padding: 0.01em 16px;
  position: absolute;
  font-weight: 400;
  font-size: 30px;
  left: 0;
  bottom: 0;
  color: white;
`

export const SkillsSec = styled.div`
  padding: 0.01em 16px;
`