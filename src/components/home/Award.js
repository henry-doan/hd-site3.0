import { useState } from 'react';
import { DateIcon, EduPic } from "../styled/aboutStyles";
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

const Award = ({ para, pic }) => {
  const [open, setOpen] = useState(false);

  return(
    <>
      <p>{para}</p>
      <DateIcon className="fa fa-camera fa-fw" onClick={() => setOpen(true)}></DateIcon>
      <Modal open={open} onClose={() => setOpen(false)} center>
        <EduPic 
          src={pic} 
          alt={para} 
          effect="blur"
        />
      </Modal>
    </>
  )
}

export default Award;