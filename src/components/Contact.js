import React from 'react';
import { Helmet } from 'react-helmet';

function Contact() {
  return (
    <div>
      <Helmet>
        <title>Cristian Turmacu || Contact</title>
      </Helmet>
      <h1>
        For now you can only contact me at{' '}
        <a href="mailto:cristianturmacu@yahoo.com">cristianturmacu@yahoo.com</a>
      </h1>
      <div>
        <h1>Coming soon</h1>
        <h2>For now it's a to do list for this website:</h2>
        <ul>
          <li>Create all pages: Projects, About, Contact</li>
          <li>Add theme(dark, light), languages(english, italian)</li>
          <li>Improve style, UI/UX on everything</li>
          <li>Add the rest of the plugins: helmet, sitemap, manifest, Gtag</li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
