import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const StyledContact = styled.div`
  .formcontainer {
    display: flex;
    justify-content: center;
    form {
      display: flex;
      flex-direction: column;
      width: 80%;
      @media (min-width: 679px) {
        width: 50%;
      }
    }
  }
`;

function Contact() {
  return (
    <StyledContact>
      <Helmet>
        <title>Cristian Turmacu || Contact</title>
      </Helmet>
      <h1 style={{ textAlign: 'center' }}>
        Feel free to contact me at{' '}
        <a href="mailto:cristianturmacu@yahoo.com">cristianturmacu@yahoo.com</a>
      </h1>
      <h2 style={{ textAlign: 'center' }}>Still working on this</h2>
      <div className="formcontainer">
        <form
          name="contact v1"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact v1" />
          <input name="name" placeholder="Your Name" type="text" />
          <input name="email" placeholder="email@adress.com" type="email" />
          <textarea
            rows="4"
            cols="50"
            name="message"
            placeholder="Message"
            type="text"
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </StyledContact>
  );
}

export default Contact;
