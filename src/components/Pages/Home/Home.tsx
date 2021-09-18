/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div id="home" className="page">
      <h2 className="page-header">
        Home
        <br />
        <small>Welcome</small>
      </h2>
      <p>
        Thanks for visiting my page! This is a site to house my projects and be the guinea pig for my creative outlet. From time to time this site may get switched up a bit with new things added periodically.
        <br />
        <br />
        All my social links are above, under my name. Feel free to connect with me!
        <br />
        <br />
        <Link to="/projects" className="btn btn-warning">Check out some of my work</Link>
      </p>
    </div>
  );
}
