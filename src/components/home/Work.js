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
        para="Worked on large scale industry projects with commission work from schools and institutions."
      />        
    </TabPane>
    <TabPane tab="DevPoint Studios" key="2">
      <ExpSection 
        title="Full Stack Web Developer" 
        start="May 2017"
        end="February 2023"
        para="Developed and implemented full-stack applications utilizing the latest industry frameworks and technologies to meet the client’s specifications. Used AGILE and SCRUM methodology to coordinate with team members."
      />        
    </TabPane>
    <TabPane tab="DevPoint Labs" key="3">
      <ExpSection 
        title="Lead Instructor" 
        start="October 2017"
        end="February 2023"
        para="Educated and trained 150+ individuals to become full-stack web developers utilizing the latest industry best practices, tools, and programming languages. Content created for lectures, projects, and assignments to gear towards concepts learned through the Bootcamp."
      />        
    </TabPane>
    <TabPane tab="Future In Design" key="4">
      <ExpSection 
        title="Instructor" 
        start="December 2017"
        end="January 2019"
        para="Educating and mentoring high school youths in an after-school program geared towards developing future industry leaders in various technological fields. Providing them with information in the foundation of software engineering and web development."
      />
    </TabPane>
  </Tabs>
)

export default Work;
