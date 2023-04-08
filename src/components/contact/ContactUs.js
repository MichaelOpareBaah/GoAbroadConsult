import React from 'react';
import { useState } from 'react';
import axios from 'axios';

function ContactUs() {
  const { log } = console;
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  log('FirstNAme', firstname);
  log('LastName', lastname);
  log('Email', email);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const teamPayload = {
      firstname,
      lastname,
      email,
      phone,
      message,
    };
    log('Payload', teamPayload);

    try {
      const { data } = await axios({
        url: '/api/teamadd',
        method: 'POST',
        data: teamPayload,
      });
      log('Response:', data);
    } catch (error) {
      log('Error:', error);
    }
  };
  return (
    <div className="contactForm">
      <h2 className="formTitle">Apply Now!</h2>
      <form action="#" onSubmit="#" className="applyForm">
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
              value={firstname}
              onChange={({ target }) => setFirstname(target?.value)}
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
              value={lastname}
              onChange={({ target }) => setLastname(target?.value)}
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
        <button onClick={handleSubmit} className="submitBtn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
