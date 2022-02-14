import { AboutContainer, AboutLeft, AboutRight, AboutTitle, AboutMainIcon } from "../styled/aboutStyles";
import ExpSection from './ExpSection';

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
				
			</AboutRight>
		</AboutContainer>
	</>
)

export default About;