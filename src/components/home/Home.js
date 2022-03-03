import Header from '../shared/Header';
import SLC from '../../images/SLC.png';
import Tabs, { TabPane } from 'rc-tabs';
import '../../../node_modules/rc-tabs/assets/index.css';
import ExpSection from '../about/ExpSection';
import { SharedContainer } from '../styled/sharedStyles';
import { AboutTitle, AboutMainIcon, SkillsContainer, AvatarSec, AvatarImg, AvatarText, SkillsSec, DateSec, DateIcon, Line } from "../styled/aboutStyles";
import Avatar from '../../images/hdAvatar.jpeg';
import { ProjSkills, ProjSkill } from '../styled/projStyles';
import skills from './Skills';

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
			<h1>Where I’ve Worked</h1>
			<Tabs defaultActiveKey="1" tabPosition="left">
        <TabPane tab="DevPoint Studios" key="1">
					<ExpSection 
						title="Full Stack Web Developer" 
						start="May 2017"
						current
						para="Developed and implemented full-stack applications utilizing the latest industry frameworks and technologies to meet the client’s specifications. Used AGILE and SCRUM methodology to coordinate with team members."
					/>        
				</TabPane>
        <TabPane tab="DevPoint Labs" key="2">
					<ExpSection 
						title="Lead Instructor" 
						start="October 2017"
						current
						para="Educated and trained 150+ individuals to become full-stack web developers utilizing the latest industry best practices, tools, and programming languages. Content created for lectures, projects, and assignments to gear towards concepts learned through the Bootcamp."
					/>        
				</TabPane>
        <TabPane tab="Future In Design" key="3">
					<ExpSection 
						title="Instructor" 
						start="December 2017"
						end="January 2019"
						para="Educating and mentoring high school youths in an after-school program geared towards developing future industry leaders in various technological fields. Providing them with information in the foundation of software engineering and web development."
					/>
        </TabPane>
      </Tabs>
			<h1>Come check out my projects:</h1>
			<h1>My Education</h1>
			<Tabs defaultActiveKey="1" tabPosition="right">
        <TabPane tab="CS Bachelor's Degree" key="1">
					<ExpSection 
						title="Weber State University" 
						start="July 2020"
						end="December 2021"
						para="Computer Science Bachelor's Degree"
						para2="High Academic Excellence Spring 2021"
						para3="High Academic Excellence Summer 2021"
						pic="https://images.unsplash.com/photo-1570610159825-ec5d3823660c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2833&q=80"
					/>  
				</TabPane>
        <TabPane tab="CSIS Associate's Degree" key="2">
					<ExpSection 
						title="Salt Lake Community College" 
						start="August 2018"
						end="June 2020"
						para="Computer Science & Information Systems Associate's Degree"
						pic="https://images.unsplash.com/photo-1570610159825-ec5d3823660c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2833&q=80"
					/>        
				</TabPane>
        <TabPane tab="Software Development" key="3">
					<ExpSection 
						title="Salt Lake Community College" 
						start="August 2018"
						end="June 2020"
						para="Certificate of Proficiency With a major in Software Development"
						pic="https://images.unsplash.com/photo-1570610159825-ec5d3823660c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2833&q=80"
					/>        
				</TabPane>
        <TabPane tab="Full Stack Web Dev" key="4">
					<ExpSection 
						title="DevPoint Labs" 
						start="May 2016"
						end=" July 2016"
						para="Full Stack Web Development Certificate"
						pic="https://images.unsplash.com/photo-1570610159825-ec5d3823660c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2833&q=80"
					/>
        </TabPane>
        <TabPane tab="Front End Web Dev" key="5">
					<ExpSection 
						title="DevPoint Labs" 
						start="May 2015"
						end=" July 2015"
						para="Front End Web Development Certificate"
						pic="https://images.unsplash.com/photo-1570610159825-ec5d3823660c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2833&q=80"
					/> 
        </TabPane>
      </Tabs>
			<h1>Contact me</h1>
		</SharedContainer>
	</>
)

export default Home;