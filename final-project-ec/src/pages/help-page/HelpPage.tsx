import React from 'react';
import '../help-page/help-page.css';

const HelpPage: React.FC = () => {
  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    button.classList.toggle('active');
    const question = button.nextElementSibling as HTMLDivElement;
    question.classList.toggle('active');

    if (question.style.display === 'block') {
      question.style.display = 'none';
    } else {
      question.style.display = 'block';
    }
  };


  return (
   <div className="help-container">
      <h1> Midnigth Mysteries</h1>
      <p> How can we help you?</p>

      <div className="question">
       <button className="button-question" onClick={handleButtonClick}>
          Who are we?
      </button>
      <div className= "answer">
        <p> Welcome to "Midnight Mysteries"! We are a team of enthusiastic young developers who have created this thrilling mystery-solving game, challenging you to uncover the hidden killer among us. Our primary aim is to provide you with the most enjoyable and immersive experience while playing this exciting mystery-solving game. To ensure you have a great time, we have provided some helpful instructions and tips.</p>
      </div>
    </div>
    <div className="question">
        <button className="button-question" onClick={handleButtonClick}>
          Mental Health
        </button>
        <div className="answer">
          <p> "Midnight Mysteries" is a fictional and interactive mystery-solving game designed for entertainment purposes. It contains themes related to solving mysteries, including elements of suspense and crime. Please be aware that some players may find the content intense or emotionally challenging. Your well-being is important to us, and we encourage you to prioritize your mental health while enjoying the game.</p>
        </div>
      </div><div className="question">
        <button className="button-question" onClick={handleButtonClick}>
          How to play?
        </button>
        <div className="answer">
          <ul>
            <li>1. Create an account to play, you will need an email address.
              If you already have an account registered in the game, just <a href="">Login</a></li>
            <li> 2. Choose your character skin and click on "next".</li>
            <li> 3. Name your player and click on "next".</li>
            <li> 4. Click on "Start" when you are ready to play!</li>
            <li> 5. Beggin the game and resolve the case!</li>
          </ul>
        </div>
      </div><div className="question">
        <button className="button-question" onClick={handleButtonClick}>
          How to create an account?
        </button>
        <div className="answer">
          <ul>
            <li>1.  Click on "<a href="">create an account to play</a>".</li>
            <li>2.  Choose a username.</li>
            <li>3.  Register with an valid email addres.</li>
            <li>4.  Create a password for your account</li>
            <li>5.  Sign up!</li>
          </ul>
        </div>
      </div>
  </div>
 );
};

export default HelpPage;