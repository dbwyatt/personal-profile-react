import React from 'react';
import config from 'config';

export default function Contact() {
  return (
    <div id="contact" className="page">
      <h2 className="page-header">
        Contact Me
        <br />
        <small>Let&apos;s connect!</small>
      </h2>
      <p>
        On a case-by-case basis I&apos;m available for contract work.
        {' '}
        This could range from building a website to web consulting. Shoot me a message.
      </p>
      <p>
        Email me at
        {' '}
        <a href={`mailto:${config.email}`}>{config.email}</a>
        {' '}
        or connect with me on LinkedIn above
      </p>
    </div>
  );
}
