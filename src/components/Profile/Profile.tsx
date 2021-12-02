import React from 'react';
import { Link } from 'react-router-dom';
// import me from 'assets/img/daniel.jpg';
// import linkedin from 'assets/img/linkedin.png';
// import github from 'assets/img/github-pic.png';
// import twitter from 'assets/img/twitter.png';

export default function Profile() {
  return (
    <div id="profile-content">
      <Link to="/">
        <img id="me" src="/img/daniel.jpg" alt="me" />
      </Link>
      <div id="profile">
        <h1>
          <span>Daniel</span>
          {' '}
          <span>Wyatt</span>
        </h1>
        {/* <button type="button" id="connect">Connect with me</button> */}
        <a target="_blank" href="https://www.linkedin.com/in/daniel-b-wyatt" rel="noreferrer">
          <img className="social" src="/img/linkedin.png" alt="linkedin" />
        </a>
        <a target="_blank" href="https://www.github.com/dbwyatt" rel="noreferrer">
          <img className="social" src="/img/github-pic.png" alt="github" />
        </a>
        <a target="_blank" href="https://twitter.com/dbwyatt23" rel="noreferrer">
          <img className="social" src="/img/twitter.png" alt="twitter" />
        </a>
      </div>
    </div>
  );
}
