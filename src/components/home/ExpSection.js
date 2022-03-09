import { WorkExpSection, WorkExpSingle, WorkTitle, DateSec, DateIcon, CurrentDate,  } from "../styled/aboutStyles";

const ExpSection = ({ title, para, para2, para3, para4, start, end, current }) => (
  <WorkExpSection>
    <WorkExpSingle>
      <WorkTitle>{title}</WorkTitle>
      <DateSec>
        <DateIcon className="fa fa-calendar fa-fw"></DateIcon> {start} - {current ? <CurrentDate>Current</CurrentDate> : end } 
      </DateSec>
      <p>{para}</p>
      { para2 ? <p>{para2}</p> : null }
      { para3 ? <p>{para3}</p> : null }
      { para4 ? <p>{para4}</p> : null }
      {/* { pic ? <DateIcon className="fa fa-camera fa-fw"></DateIcon> : null } */}
    </WorkExpSingle>
  </WorkExpSection>
)

export default ExpSection;