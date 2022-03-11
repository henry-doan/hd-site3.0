import Tabs, { TabPane } from 'rc-tabs';
import '../../../node_modules/rc-tabs/assets/index.css';
import EduSection from './EduSection';

const Edu = () => (
  <Tabs defaultActiveKey="1" tabPosition="right">
    <TabPane tab="CS Bachelor's Degree" key="1">
      <EduSection 
        title="Weber State University" 
        start="July 2020"
        end="December 2021"
        paras={[
          { para: "Computer Science Bachelor's Degree", pic: "https://res.cloudinary.com/doan/image/upload/v1647040039/hd-site/weberDiploma.png"},
          { para: "High Academic Excellence Spring 2021", pic: "https://res.cloudinary.com/doan/image/upload/v1647041105/hd-site/AcaSpring2021.png"},
          { para: "High Academic Excellence Summer 2021", pic: "https://res.cloudinary.com/doan/image/upload/v1647041104/hd-site/AcaSummer2021.png"},
          { para: "High Academic Excellence Fall 2021", pic: "https://res.cloudinary.com/doan/image/upload/v1647040366/hd-site/AcaExFall2021.png"},
        ]}
      />  
    </TabPane>
    <TabPane tab="CSIS Associate's Degree" key="2">
      <EduSection 
        title="Salt Lake Community College" 
        start="August 2018"
        end="June 2020"
        paras={[
          { para: "Computer Science & Information Systems Associate's Degree", pic: "https://res.cloudinary.com/doan/image/upload/v1647041106/hd-site/SLCCAssoc.png"},
        ]}
      />        
    </TabPane>
    <TabPane tab="Software Development" key="3">
      <EduSection 
        title="Salt Lake Community College" 
        start="August 2018"
        end="June 2020"
        paras={[
          { para: "Certificate of Proficiency With a major in Software Development", pic: "https://res.cloudinary.com/doan/image/upload/v1647041110/hd-site/SLCCSoftwareDev.png"},
        ]}
      />        
    </TabPane>
    <TabPane tab="Full Stack Web Dev" key="4">
      <EduSection 
        title="DevPoint Labs" 
        start="May 2016"
        end=" July 2016"
        paras={[
          { para: "Full Stack Web Development Certificate", pic: "https://res.cloudinary.com/doan/image/upload/v1647041108/hd-site/DPLFullStack.png"},
        ]}
      />
    </TabPane>
    <TabPane tab="Front End Web Dev" key="5">
      <EduSection 
        title="DevPoint Labs" 
        start="May 2015"
        end=" July 2015"
        paras={[
          { para: "Front End Web Development Certificate", pic: "https://res.cloudinary.com/doan/image/upload/v1647041106/hd-site/DPLFrontEnd.png"},
        ]}
      /> 
    </TabPane>
  </Tabs>
)

export default Edu;