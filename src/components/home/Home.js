import Header from '../shared/Header';
import SLC from '../../images/SLC.png';
import { SharedContainer } from '../styled/sharedStyles';
import { Line } from "../styled/aboutStyles";
import About from './About';
import Edu from './Edu';
import Work from './Work';
import ContactSec from './ContactSec';

const Home = () => (
	<>
		<Header img={SLC} text="Welcome!" />
		<SharedContainer>
			<h1>About me</h1>
			<About />
			<Line />
			<h1>Where I’ve Worked</h1>
			<Work />
			<Line />
			<h1>Come check out my projects:</h1>
			<Line />
			<h1>My Education</h1>
			<Edu />
			<Line />
			<ContactSec />
		</SharedContainer>
	</>
)

export default Home;