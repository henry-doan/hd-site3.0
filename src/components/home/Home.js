import Header from '../shared/Header';
import Welcome from '../../images/lowpolyDevices.png';
import { SharedContainer, HomeTitle } from '../styled/sharedStyles';
import { Line } from "../styled/aboutStyles";
import About from './About';
import Edu from './Edu';
import Work from './Work';
import ContactSec from './ContactSec';
import Proj from './Proj';

const Home = () => (
	<>
		<Header img={Welcome} />
		<SharedContainer>
			<HomeTitle>A Little About Me ...</HomeTitle>
			<About />
			<Line />
			<HomeTitle>Where I’ve Worked</HomeTitle>
			<Work />
			<Line />
			<Proj />
			<Line />
			<HomeTitle>My Education</HomeTitle>
			<Edu />
			<Line />
			<ContactSec />
			<Line />
		</SharedContainer>
	</>
)

export default Home;