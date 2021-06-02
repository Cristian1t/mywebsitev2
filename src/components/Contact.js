import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { FiMail } from '@react-icons/all-files/fi/FiMail';

const StyledContact = styled.div`
  height: 100%;
  padding: 0;
  margin: 0;
  background: white;
  display: flex;
  flex-direction: column;
  @media (min-width: 769px) {
    margin-right: 1.5rem;
    border-radius: 1rem;
  }
  .iconmail {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    a {
      text-decoration: none;
      color: inherit;
      padding-left: 0.5rem;
      :hover {
        color: ${({ theme }) => theme.color.details2};
      }
    }
  }
  h2,
  h3 {
    color: black;
    padding: 0.8rem;
    padding-top: 2rem;
    margin: 0;
    text-align: center;
  }
  .formcontainer {
    width: 100%;
    margin: 0 auto;
    background: ${({ theme }) => theme.color.details2};
    display: flex;
    justify-content: center;
    @media (min-width: 769px) {
      border-radius: 1rem;
      margin-bottom: 2rem;
      margin-top: 2rem;
    }

    h3 {
      padding-bottom: 0.2rem;
    }
    input {
      height: 1.5rem;
      font-size: 1.5rem;
      text-align: center;
      border-radius: 0.4rem;
      border: 1px solid ${({ theme }) => theme.color.text};
    }
    textarea {
      border: 1px solid ${({ theme }) => theme.color.text};
      @media (min-width: 769px) {
        height: 75%;
      }
    }
    button {
      border-radius: 0.4rem;
      border: none;
      box-shadow: 1px 1px black;
      cursor: pointer;
    }
    form {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: auto auto 1fr auto;
      gap: 0px 0px;
      grid-template-areas:
        'name'
        'email'
        'message'
        'send';
      @media (min-width: 769px) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        gap: 1rem;
        grid-template-areas:
          'name message'
          'email message'
          'send message';
      }
      .name {
        margin: 0 auto;
        width: 80%;
        display: flex;
        flex-direction: column;
        grid-area: name;
      }
      .email {
        margin: 0 auto;
        width: 80%;
        display: flex;
        flex-direction: column;
        grid-area: email;
      }
      .send {
        margin: 1rem auto;
        width: 60%;
        grid-area: send;
        font-weight: bold;
        text-transform: uppercase;
        @media (min-width: 769px) {
          margin-top: 3rem;
          height: 2rem;
        }
      }
      .message {
        margin: 0 auto;
        width: 80%;
        display: flex;
        flex-direction: column;
        grid-area: message;
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
      <h2 style={{ textAlign: 'center' }}>Get in touch!</h2>
      <h3 style={{ textAlign: 'center' }}>
        You can contact me using my email:
      </h3>
      <div className="iconmail" style={{ textAlign: 'center' }}>
        <FiMail />
        <a href="mailto:cristianturmacu@yahoo.com">cristianturmacu@yahoo.com</a>
      </div>
      <h3 style={{ textAlign: 'center' }}>Or using the form bellow:</h3>
      <div className="formcontainer">
        <form
          name="contact v1"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <div hidden>
            <input name="bot-field" />
          </div>
          <input type="hidden" name="form-name" value="contact v1" />
          <div className="name">
            <h3>Name</h3>
            <input name="name" type="text" />
          </div>
          <div className="email">
            <h3>Email</h3>
            <input name="email" type="email" />
          </div>

          <button type="submit" className="send">
            Send
          </button>
          <div className="message">
            <h3>Message</h3>
            <textarea rows="4" cols="50" name="message" type="text" />
          </div>
        </form>
      </div>
    </StyledContact>
  );
}

export default Contact;
