import React, {useState} from 'react';
import emailjs from '@emailjs/browser';
import EmailSent from './EmailSent';
import './contact.scss';

const Contact: React.FC = () => {
    const [submitted, submit] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    emailjs.sendForm('service_75gy7ag', 'template_hj7uu7u', form, '7jzrab78YhEeoELYt')
      .then((result) => {
          console.log(result.text);
          submit(true);
      }, (error) => {
          console.log(error.text);
      });

      form.reset()
  };

    return (
        <>  
            <div className='contact-container'>
                <h1>MIDNIGHT MYSTERIES</h1>

                <div className={`form-container ${submitted ? 'hidden' : ''}`}>
                    <h4>Contact Us</h4>
                    <form name="form1" action="" onSubmit={(sendEmail)}>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name='name' required/>
                        <label htmlFor="email" >Email:</label>
                        <input type="email" name="email" required/>
                        <label htmlFor="message">Message:</label>
                        <textarea name="message" id='message' cols={30} rows={8}></textarea>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
                {submitted ? <EmailSent /> : null}
            </div>            
        </>
    )
}

export default Contact;