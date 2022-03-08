import Header from '../shared/Header';
import Welcome from '../../images/lowpolyDevices.png';
import { SharedContainer } from '../styled/sharedStyles';
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
			<h1>A little about me</h1>
			<About />
			<Line />
			<h1>Where I’ve Worked</h1>
			<Work />
			<Line />
			<Proj />
			<Line />
			<h1>My Education</h1>
			<Edu />
			<Line />
			<ContactSec />
		</SharedContainer>
	</>
)

export default Home;