import React from 'react';
import { useState } from 'react';
import axios from 'axios';

function ContactUs() {
  const { log } = console;
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState('');

  log('FirstNAme', firstName);
  log('LastName', lastName);
  log('Email', email);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const teamPayload = {
      firstName,
      lastName,
      email,
      phone,
      message,
    };
    log('Payload', teamPayload);

    try {
      const { data } = await axios({
        url: '/api/travellers',
        method: 'POST',
        data: teamPayload,
      });
      console.log("response : ",data)
      log('Response:', data);
      if(data.success === true){
        setNotification('Application submitted')
        setFirstName('')
        setLastName('')
        setEmail('')
        setPhone('')
        setMessage('')
        setLoading(false);
      }
      else{
        setNotification(data.message)
        setLoading(false);
      }
    } catch (error) {
      setNotification('There was error processing your request, please try again later')
      setLoading(false);
      log('Error:', error);
    }
  };
  return (
    <div className="contactForm">
      <h2 className="formTitle">Apply Now!</h2>
      <form action="#" onSubmit="#" className="applyForm">
        {/* adding notification */}
        <h2>  {notification} </h2>
        <br/>
        <div className="fieldRow">
          <div className="field">
            <label className="formLabel" htmlFor="firstName">
              First Name
            </label>
            <input
              className="formControl"
              type="text"
              name="firstName"
              id="firstName"
              value={firstName}
              onChange={({ target }) => setFirstName(target?.value)}
              required
            />
          </div>
          <div className="field">
            <label className="formLabel" htmlFor="lastName">
              Last Name
            </label>
            <input
              className="formControl"
              type="text"
              name="lastName"
              value={lastName}
              onChange={({ target }) => setLastName(target?.value)}
              id="lastName"
              required
            />
          </div>
        </div>
        <div className="fieldRow">
          <div className="field">
            <label className="formLabel" htmlFor="Email">
              Email
            </label>
            <input
              className="formControl"
              type="email"
              name="Email"
              value={email}
              onChange={({ target }) => setEmail(target?.value)}
              id="Email"
              required
            />
          </div>
          <div className="field">
            <label className="formLabel" htmlFor="phone">
              Phone
            </label>
            <input
              className="formControl"
              type="tel"
              name="phone"
              value={phone}
              onChange={({ target }) => setPhone(target?.value)}
              id="phone"
              required
            />
          </div>
        </div>
        <div className="field">
          <label className="formLabel" htmlFor="message">
            Message
          </label>
          <textarea
            className="formArea"
            id="message"
            value={message}
            onChange={({ target }) => setMessage(target?.value)}
            name="message"
          />
        </div>
        {loading === true ? "Processing application form ...." : 
        <>
        <button onClick={handleSubmit} className="submitBtn" type="submit" disabled = {loading === true ? true : false}>Submit</button>
        </>}
        
      </form>
    </div>
  );
}

export default ContactUs;
