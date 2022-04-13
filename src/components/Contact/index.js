import { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    // this is  our hook for keeping track of our email error message
    const [errorMessage, setErrorMessage] = useState('');
      // this hook will manage the form data "set initial data to empty strings"
      const [formState, setFormState] = useState({name: '', email: '', message: ''});
      // destructure formState
      const {name, email,message} = formState;
      // This function will sync the internal state of the component formState with the user input from the DOM. 
      function handleChange(e) {
          // use helper function to help check against our email value and make sure its valid
          if(e.target.name === 'email') {
              const isValid = validateEmail(e.target.value);
              //console.log(isValid);
              // isValid conditional statement for the email validation
              if(!isValid) {
                  setErrorMessage('your email is not valid !')
              }else {
                  setErrorMessage('');
              }
          }else {
              if(!e.target.value.length) {
                  setErrorMessage(`${e.target.name} is required.`);
              }else {
                  setErrorMessage('');
              }
          }
          // only update state if all data is valid form data
          if(!errorMessage) { 
          setFormState({...formState, [e.target.name]: e.target.value})
          }
         
          
      };
      // below will log form data updating in real time.
      //console.log(formState);
      function handleSubmit(e) {
             e.preventDefault();
             console.log(formState);
      };
    return (
        <section>
            <h1>Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type='text' name="name" defaultValue={name} onBlur={handleChange}/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type='email' name="email" defaultValue={email} onBlur={handleChange}/>
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                </div>
                {errorMessage &&(
                    <div>
                        <p className='error-text'>{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </section>
    );
};

export default ContactForm;