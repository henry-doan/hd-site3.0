import { Fade, Flip, Slide } from 'react-reveal';

import Welcome from '../../images/lowpolyDevices.png';
import WelcomeMobile from '../../images/welcomeMobile.png';
import Header from '../shared/Header';
import { Line } from "../styled/aboutStyles";
import { HomeTitle, SharedContainer } from '../styled/sharedStyles';
import About from './About';
import ContactSec from './ContactSec';
import Edu from './Edu';
import Proj from './Proj';
import Work from './Work';

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
				<HomeTitle>Where I've Worked</HomeTitle>
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