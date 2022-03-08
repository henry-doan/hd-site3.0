import { MainHeader, MainHeaderContainer, MainHeaderText } from "../styled/sharedStyles";

const Header = ({ img, text }) => (
  <MainHeader img={img}>
    <MainHeaderContainer>
      { text ? <MainHeaderText>{text}</MainHeaderText> : null }
    </MainHeaderContainer>
  </MainHeader>
)

export default Header;