import { FeaturedProj, HomeProjContainer, HomeProjLeft, HomeProjPara, HomeProjRight, HomeProjText, HomeProjTitle, RectFour, RectOne, RectThree, RectTwo } from '../styled/projStyles';
import { BottomBtn, HLink, LtBtn, RtBtn, TopBtn } from '../styled/sharedStyles';

const Proj = () => (
  <HomeProjContainer>
    <HomeProjLeft>
      <RectOne></RectOne>
      <RectTwo></RectTwo>
      <RectThree></RectThree>
      <RectFour>
        <FeaturedProj 
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdlYnNpdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" 
          effect="blur"
          alt='featured project'
        />
      </RectFour>
    </HomeProjLeft>
    <HomeProjRight>
      <HomeProjText>
        <HomeProjTitle>Check out my projects!</HomeProjTitle>
        <HomeProjPara>
          I am always working on new and exciting projects. Come take a look at some highlighted projects!
        </HomeProjPara>
        <HLink to="/projects">
          <TopBtn></TopBtn>
          <RtBtn></RtBtn>
          <BottomBtn></BottomBtn>
          <LtBtn></LtBtn>
          Projects
        </HLink>
      </HomeProjText>
    </HomeProjRight>
  </HomeProjContainer>
)

export default Proj;