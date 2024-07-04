import { WorkExpSection, WorkExpSingle, WorkTitle, DateSec, DateIcon, CurrentDate,  } from "../styled/aboutStyles";
import { SpacedLi } from "../styled/sharedStyles";

const ExpSection = ({ title, bullets, start, end, current }) => (
  <WorkExpSection>
    <WorkExpSingle>
      <WorkTitle>{title}</WorkTitle>
      <DateSec>
        <DateIcon className="fa fa-calendar fa-fw"></DateIcon> {start} - {current ? <CurrentDate>Current</CurrentDate> : end } 
      </DateSec>
      <ul>
        { bullets.map( b => <SpacedLi>{b}</SpacedLi>) }
      </ul>
    </WorkExpSingle>
  </WorkExpSection>
)

export default ExpSection;