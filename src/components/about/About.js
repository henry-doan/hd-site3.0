import { AboutContainer, AboutLeft, AboutRight, AboutTitle, AboutMainIcon, SkillsContainer, AvatarSec, AvatarImg, AvatarText, SkillsSec, DateSec, DateIcon, Line } from "../styled/aboutStyles";
import ExpSection from './ExpSection';
import Avatar from '../../images/hdAvatar.jpeg';

const About = () => (
	<>
		<AboutContainer>
			<AboutLeft>
				<AboutTitle>
					<AboutMainIcon className="fa fa-suitcase fa-fw"></AboutMainIcon>
					Work Experience
				</AboutTitle>
				<ExpSection 
					title="Full Stack Web Developer / DevPoint Studios" 
					start="May 2017"
					current
					para="Developed and implemented full-stack applications utilizing the latest industry frameworks and technologies to meet the client’s specifications. Used AGILE and SCRUM methodology to coordinate with team members."
				/>
				<ExpSection 
					title="Lead Instructor / DevPoint Labs" 
					start="October 2017"
					current
					para="Educated and trained 150+ individuals to become full-stack web developers utilizing the latest industry best practices, tools, and programming languages. Content created for lectures, projects, and assignments to gear towards concepts learned through the Bootcamp."
				/>
				<ExpSection 
					title="Instructor / Future In Design" 
					start="December 2017"
					end="January 2019"
					para="Educating and mentoring high school youths in an after-school program geared towards developing future industry leaders in various technological fields. Providing them with information in the foundation of software engineering and web development."
				/>
				<AboutTitle>
					<AboutMainIcon className="fa fa-graduation-cap fa-fw"></AboutMainIcon>
					Education
				</AboutTitle>
				<ExpSection 
					title="Weber State University" 
					start="July 2020"
					end="December 2021"
					para="Computer Science Bachelor's Degree"
				/>
				<ExpSection 
					title="Salt Lake Community College" 
					start="August 2018"
					end="June 2020"
					para="Computer Science & Information Systems Associate's Degree"
				/>
				<ExpSection 
					title="DevPoint Labs " 
					start="May 2016"
					end=" July 2016"
					para="Full Stack Web Development Course"
				/>
				<ExpSection 
					title="DevPoint Labs" 
					start="May 2015"
					end=" July 2015"
					para="Front End Web Development Course"
				/>
			</AboutLeft>
			<AboutRight>
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
						<ul>
							<li>Git</li>
						</ul>
						<p>ReactJS</p>
						<p>Ruby On Rails</p>
						<p>Javascript (ES6 and Beyond)</p>
						<p>SQL</p>
						<p>NodeJS</p>
						<p>Ruby</p>
						<p>Command Line</p>
						<p>HTMl / CSS</p>
						<p>Git/Github</p>
						<p>Heroku</p>
						<p>Styled Components</p>
						<p>PostgreSQL</p>
						<p>React Router</p>
						<p>Context API</p>
						<p>.Net Core</p>
						<p>Django</p>
						<p>Python</p>
					</SkillsSec>
				</SkillsContainer>
			</AboutRight>
		</AboutContainer>
	</>
)

export default About;