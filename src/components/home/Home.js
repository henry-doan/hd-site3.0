import Header from '../shared/Header';
import SLC from '../../images/SLC.png';
import { SharedContainer } from '../styled/sharedStyles';
import { AboutTitle, AboutMainIcon, SkillsContainer, AvatarSec, AvatarImg, AvatarText, SkillsSec, DateSec, DateIcon, Line } from "../styled/aboutStyles";
import Avatar from '../../images/hdAvatar.jpeg';
import { ProjSkills, ProjSkill } from '../styled/projStyles';
import skills from './Skills';
import Edu from './Edu';
import Work from './Work';
import ContactSec from './ContactSec';

const Home = () => (
	<>
		<Header img={SLC} text="Welcome!" />
		<SharedContainer>
			<h1>About me</h1>
			<SkillsContainer>
					<AvatarSec>
						<AvatarImg src={Avatar} alt="avatar" />
						<AvatarText>Henry Doan</AvatarText>
					</AvatarSec>
					<SkillsSec>
						<DateSec>
							<DateIcon className="fa fa-briefcase fa-fw"></DateIcon>
							Full Stack Web Developer
						</DateSec>
						<DateSec>
							<DateIcon className="fa fa-map-marker fa-fw"></DateIcon>
							Sillicon Slopes
						</DateSec>
						<DateSec>
							<DateIcon className="fa fa-envelope fa-fw"></DateIcon>
							henrydoan96@email.com
						</DateSec>
						<Line></Line>
						<AboutTitle>
							<AboutMainIcon className="fa fa-code fa-fw"></AboutMainIcon>
							Skills
						</AboutTitle>
						<ProjSkills>
							{ skills.map( tool => <ProjSkill>{tool}</ProjSkill>)}
						</ProjSkills>
					</SkillsSec>
				</SkillsContainer>
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