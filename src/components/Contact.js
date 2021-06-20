import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { FiMail } from '@react-icons/all-files/fi/FiMail';

const StyledContact = styled.div`
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
    background-color: ${({ theme }) => theme.color.details2};
    margin: 0 auto;
    width: 90%;
    margin-bottom: 2rem;
    border-radius: 0.5rem;
    @media (min-width: 769px) {
      width: 70%;
      border-radius: 2rem;
    }
  }
  form {
    margin: 0 auto;
    width: 90%;
    margin-top: 2rem;
    text-align: center;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr 0.2fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    @media (min-width: 769px) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr) 0.2fr;
    }
  }
  input,
  textarea {
    padding: 0;
    border: 0;
    outline: 0;
    width: 95%;
    margin: 0.3rem auto;
    min-height: 1.5rem;
    font-size: 1.5rem;
    @media (min-width: 769px) {
      min-height: 2.5rem;
      width: 90%;
    }

    :focus {
      border-left: 2px solid red;
      border-right: 2px solid red;
    }

    @media (min-width: 769px) {
      border-radius: 8px;
    }
  }

  #input-submit {
    color: white;
    background: ${({ theme }) => theme.color.details};
    cursor: pointer;
    grid-area: 3 / 1 / 4 / 2;
    :hover {
      background: ${({ theme }) => theme.color.text};
    }
    margin-bottom: 1.5rem;
    @media (min-width: 769px) {
    }

    :hover {
    }
    @media (min-width: 769px) {
      grid-area: 3 / 1 / 4 / 3;
    }
  }

  .left {
    grid-area: 1 / 1 / 2 / 2;
    @media (min-width: 769px) {
      grid-area: 1 / 1 / 3 / 2;
    }
  }

  .right {
    grid-area: 2 / 1 / 3 / 2;
    @media (min-width: 769px) {
      grid-area: 1 / 2 / 3 / 3;
    }
  }
`;

function Contact() {
  return (
    <StyledContact>
      <Helmet
        htmlAttributes={{
          lang: 'en',
        }}
      >
        <title>Cristian Turmacu || Contact</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="On this page you can find my contact information. You can use email or the form."
        />
      </Helmet>
      <h2 style={{ textAlign: 'center' }}>Get in touch!</h2>
      <h3 style={{ textAlign: 'center' }}>
        You can contact me using my email:
      </h3>
      <div className="iconmail" style={{ textAlign: 'center' }}>
        <FiMail />
        <a href="mailto:cristianturmacu@yahoo.com">cristianturmacu@yahoo.com</a>
      </div>
      <h3 style={{ textAlign: 'center' }}>Or using the form below:</h3>
      <div className="formcontainer">
        <form
          name="cf"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <div hidden>
            <input name="bot-field" />
          </div>
          <input type="hidden" name="form-name" value="cf" />
          <div className="left">
            <input name="name" type="text" id="input-name" placeholder="Name" />
            <input
              name="email"
              type="email"
              id="input-email"
              placeholder="Email address"
            />
            <input
              type="text"
              id="input-subject"
              name="subject"
              placeholder="Subject"
            />
          </div>
          <div className="right">
            <textarea
              name="message"
              type="text"
              id="input-message"
              placeholder="Message"
              rows="6"
              cols="50"
            />
          </div>
          <input type="submit" value="Submit" id="input-submit" />
        </form>
      </div>
    </StyledContact>
  );
}

export default Contact;
