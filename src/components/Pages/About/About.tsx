import React from 'react';

export default function About() {
  return (
    <div id="about" className="page">
      <h2 className="page-header">
        About Me
        <br />
        <small>Programming is cool? Programming is awesome!</small>
      </h2>
      <p>
        I&apos;m an avid Software Engineer! Been neck deep in web development for the last
        {' '}
        <span id="number-of-years">{new Date().getFullYear() - 2013}</span>
        {' '}
        years.
      </p>
    </div>
  );
}
