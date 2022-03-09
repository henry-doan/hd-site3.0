import { MainHeader, MainHeaderContainer, MainHeaderText } from "../styled/sharedStyles";

const Header = ({ img, text, mobileImg }) => (
  <MainHeader img={img} mobileImg={ mobileImg ? mobileImg : img }>
    <MainHeaderContainer>
      { text ? <MainHeaderText>{text}</MainHeaderText> : null }
    </MainHeaderContainer>
  </MainHeader>
)

export default Header;