import React, {useState} from 'react';
import EmailSent from './EmailSent';
import './contact.scss';

const Contact: React.FC = () => {
    const [submitted, submit] = useState(false);
    /* const validateEmail = (email: string) => {        
        let mailFormat = new RegExp('/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/');
        if (email.value.match(mailFormat)) {
            return true;
        } else {
            alert('Invalid email address!');
            return false;
        }
    } */
    
    return (
        <>  
            {/* <img src={flashlight} alt="flashlight" className='flashlight'/> */}
            <div className='contact-container'>
                <h1>MIDNIGHT MYSTERIES</h1>

                <div className={`form-container ${submitted ? 'hidden' : ''}`}>
                    <h4>Contact Us</h4>
                    <form name="form1" action="" onSubmit={() => submit(!submitted)}>
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