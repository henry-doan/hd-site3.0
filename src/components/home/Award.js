import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { DateIcon, EduPic } from "../styled/aboutStyles";

const Award = ({ para, pic }) => {
  const [open, setOpen] = useState(false);

  return(
    <>
      <p>{para}</p>
      <DateIcon className="fa fa-fw" icon={faCamera} onClick={() => setOpen(true)} />
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