import { WorkExpSection, WorkExpSingle, WorkTitle, DateSec, DateIcon, CurrentDate, Line } from "../styled/aboutStyles";

const ExpSection = ({ title, para, para2, para3, start, end, current, pic }) => (
  <WorkExpSection>
    <WorkExpSingle>
      <WorkTitle>{title}</WorkTitle>
      <DateSec>
        <DateIcon className="fa fa-calendar fa-fw"></DateIcon> {start} - {current ? <CurrentDate>Current</CurrentDate> : end } 
      </DateSec>
      <p>{para}</p>
      { para2 ? <p>{para2}</p> : null }
      { para3 ? <p>{para3}</p> : null }
      { pic ? <DateIcon className="fa fa-camera fa-fw"></DateIcon> : null }
    </WorkExpSingle>
  </WorkExpSection>
)

export default ExpSection;