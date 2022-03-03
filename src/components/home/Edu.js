import Tabs, { TabPane } from 'rc-tabs';
import '../../../node_modules/rc-tabs/assets/index.css';
import ExpSection from './ExpSection';

const Edu = () => (
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
)

export default Edu;