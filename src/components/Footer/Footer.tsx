import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div id="footer-container">
        Copyright &copy;
        {' '}
        {new Date().getFullYear()}
        {' '}
        Daniel Wyatt
      </div>
    </footer>
  );
}
