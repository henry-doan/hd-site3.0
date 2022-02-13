import { MainHeader, MainHeaderContainer, MainHeaderText } from "../styled/sharedStyles";

const Header = ({ img, text}) => (
  <MainHeader img={img}>
    <MainHeaderContainer>
      <MainHeaderText>{text}</MainHeaderText>
    </MainHeaderContainer>
  </MainHeader>
)

export default Header;