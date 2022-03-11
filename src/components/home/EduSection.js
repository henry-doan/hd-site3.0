import { WorkExpSection, WorkExpSingle, WorkTitle, DateSec, DateIcon, CurrentDate,  } from "../styled/aboutStyles";
import Award from "./Award";

const EduSection = ({ title, paras, para, para2, para3, para4, start, end, current }) => (
  <WorkExpSection>
    <WorkExpSingle>
      <WorkTitle>{title}</WorkTitle>
      <DateSec>
        <DateIcon className="fa fa-calendar fa-fw"></DateIcon> {start} - {current ? <CurrentDate>Current</CurrentDate> : end } 
      </DateSec>
      { paras.map( p => <Award {...p} />)}
    </WorkExpSingle>
  </WorkExpSection>
)

export default EduSection;