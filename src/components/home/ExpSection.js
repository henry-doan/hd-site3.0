import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

import { CurrentDate, DateIcon, DateSec, WorkExpSection, WorkExpSingle, WorkTitle, } from "../styled/aboutStyles";
import { SpacedLi } from "../styled/sharedStyles";

const ExpSection = ({ title, bullets, start, end, current }) => (
  <WorkExpSection>
    <WorkExpSingle>
      <WorkTitle>{title}</WorkTitle>
      <DateSec>
        <DateIcon className="fa fa-fw" icon={faCalendarDays} /> {start} - {current ? <CurrentDate>Current</CurrentDate> : end } 
      </DateSec>
      <ul>
        { bullets.map( b => <SpacedLi>{b}</SpacedLi>) }
      </ul>
    </WorkExpSingle>
  </WorkExpSection>
)

export default ExpSection;