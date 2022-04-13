import { useState } from 'react';

function ContactForm() {
      // this hook will manage the form data "set initial data to empty strings"
      const [formState, setFormState] = useState({name: '', email: '', message: ''});
      // destructure formState
      const {name, email,message} = formState;
      // This function will sync the internal state of the component formState with the user input from the DOM. 
      function handleChange(e) {
          setFormState({...formState, [e.target.name]: e.target.value})
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
                    <input type='text' name="name" defaultValue={name} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type='email' name="email" defaultValue={email} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onChange={handleChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
};

export default ContactForm;