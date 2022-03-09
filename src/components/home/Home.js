import Header from '../shared/Header';
import Welcome from '../../images/lowpolyDevices.png';
import WelcomeMobile from '../../images/welcomeMobile.png';
import { SharedContainer, HomeTitle } from '../styled/sharedStyles';
import { Line } from "../styled/aboutStyles";
import About from './About';
import Edu from './Edu';
import Work from './Work';
import ContactSec from './ContactSec';
import Proj from './Proj';
import { Flip, Fade, Slide } from 'react-reveal';

const Home = () => (
	<>
		<Header img={Welcome} mobileImg={WelcomeMobile} />
		<SharedContainer>
			<Flip top>
				<HomeTitle>A Little About Me ...</HomeTitle>
			</Flip>
			<Fade right>
				<About />
			</Fade>
			<Line />
			<Flip top>
				<HomeTitle>Where I’ve Worked</HomeTitle>
			</Flip>
			<Fade left>
				<Work />
			</Fade>
			<Line />
			<Slide bottom>
				<Proj />
			</Slide>
			<Line />
			<Flip top>
				<HomeTitle>My Education</HomeTitle>
			</Flip>
			<Fade right>
				<Edu />	
			</Fade>
			<Line />
			<Fade bottom>
				<ContactSec />
			</Fade>
			<Line />
		</SharedContainer>
	</>
)

export default Home;