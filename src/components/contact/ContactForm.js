import emailjs from 'emailjs-com';
import { useState } from 'react';
import { Fade, Flip } from 'react-reveal';
import { useNavigate } from 'react-router-dom';

import { ContactTextArea, ContactTextInput, Form } from '../styled/contactStyles';
import { BottomBtn, HomeSubTitle, LtBtn, MainBtn, RtBtn, TopBtn } from '../styled/sharedStyles';

const ContactForm = () => {
  const [contact, setContact] = useState({ from_name: '', reply_to: '', message_html: '' })
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()

    let template_params = {
      "reply_to": contact.reply_to,
      "from_name": contact.from_name,
      "to_name": process.env.REACT_APP_TO_NAME,
      "message_html": contact.message_html
    }

    emailjs.send(
      process.env.REACT_APP_SERVICE_ID, 
      process.env.REACT_APP_TEMPLATE_ID, 
      template_params, 
      process.env.REACT_APP_USER_ID
    )
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    navigate('/thank-you')
    setContact({ from_name: '', reply_to: '', message_html: ''})
  }

  return(
    <Form onSubmit={handleSubmit}>
      <Flip top>
        <HomeSubTitle>Shoot Me A Message!</HomeSubTitle>
      </Flip>
      <Fade bottom>
        <ContactTextInput 
          name='from_name'
          value={contact.from_name}
          onChange={(e) =>  setContact({ ...contact, from_name: e.target.value })}
          required 
          placeholder='Name'
        />
      </Fade>
      <Fade bottom>
        <ContactTextInput 
          name='reply_to'
          value={contact.reply_to}
          onChange={(e) =>  setContact({ ...contact, reply_to: e.target.value })}
          required 
          placeholder='Email'
        />
      </Fade>
      <Fade bottom>
        <ContactTextArea 
          name='message_html'
          value={contact.message_html}
          onChange={(e) =>  setContact({ ...contact, message_html: e.target.value })}
          required 
          placeholder='Message'
        >
        </ContactTextArea>
      </Fade>
      <Fade bottom>
        <MainBtn type='submit'>
          <TopBtn></TopBtn>
          <RtBtn></RtBtn>
          <BottomBtn></BottomBtn>
          <LtBtn></LtBtn>
          Send
        </MainBtn>
      </Fade>
    </Form>
  )
}

export default ContactForm;