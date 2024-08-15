import Tabs, { TabPane } from 'rc-tabs';
import '../../../node_modules/rc-tabs/assets/index.css';

import ExpSection from './ExpSection';

const Work = () => (
  <Tabs defaultActiveKey="1" tabPosition="left">
    <TabPane tab="Instructure" key="1">
      <ExpSection 
        title="Custom Development Software Engineer" 
        start="October 2022"
        current
        bullets={[
          "Worked on large-scale EdTech projects with commissioned work from schools and institutions of custom reporting tools and tools to assist educators with classroom management and instructions.",
          "Developed comprehensive documentation, database architectures, and products to meet specific requirements.",
          "Troubleshooted issues, fixed bugs, and improved application performance.",
          "Implemented CI/CD pipelines to automate deployment processes to beta, test, quality assurance, and production environments.",
          "Collaborated with cross-functional teams (including designers, solution architects, product managers, and other engineers) to ship new features leveraging Agile methodologies.",
        ]}
      />        
    </TabPane>
    <TabPane tab="DevPoint Studios" key="2">
      <ExpSection 
        title="Full Stack Web Developer" 
        start="May 2017"
        end="February 2023"
        bullets={[
          "Developed and implemented full-stack applications using the latest industry frameworks and technologies to meet client specifications.",
          "Consultant in analyzing client needs, recommending solutions, and implementing strategies to enhance client outcomes.",
          "Test and debug applications to ensure they meet quality and performance standards.",
          "Utilized Agile and Scrum methodologies to coordinate with team members.",
        ]}
      />        
    </TabPane>
    <TabPane tab="DevPoint Labs" key="3">
      <ExpSection 
        title="Lead Instructor" 
        start="October 2017"
        end="February 2023"
        bullets={[
          "Educated and mentored 150+ individuals to become full-stack web developers utilizing the latest industry best practices, tools, and programming languages. ",
          "Create and facilitate hands-on coding lessons exercises, content, projects, and assignments to reinforce learning objectives.",
          "Assess student progress through quizzes, tests, projects, and participation in class discussions.",
        ]}
      />        
    </TabPane>
    <TabPane tab="Future In Design" key="4">
      <ExpSection 
        title="Instructor" 
        start="December 2017"
        end="January 2019"
        bullets={[
          "Educating and mentoring high school youths in an after-school program geared towards developing future industry leaders in various technological fields. ",
          "Develop and implement a variety of recreational coding programs and activities suitable for high school youths.",
          "Foster a positive and inclusive atmosphere that encourages student participation, cooperation, and respect for others.",
          "Equipping the students with foundational knowledge in software engineering and web development.",
        ]}
      />
    </TabPane>
  </Tabs>
)

export default Work;
