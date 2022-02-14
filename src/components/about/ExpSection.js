import { WorkExpSection, WorkExpSingle, WorkTitle, DateSec, DateIcon, CurrentDate, Line } from "../styled/aboutStyles";

const ExpSection = ({ title, para, start, end, current }) => (
  <WorkExpSection>
    <WorkExpSingle>
      <WorkTitle>{title}</WorkTitle>
      <DateSec>
        <DateIcon className="fa fa-calendar fa-fw"></DateIcon> {start} - {current ? <CurrentDate>Current</CurrentDate> : end } 
      </DateSec>
      <p>{para}</p>
      <Line></Line>
    </WorkExpSingle>
  </WorkExpSection>
)

export default ExpSection;