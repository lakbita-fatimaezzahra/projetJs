import React from 'react';

export default function Footer() {
  return (
    <footer className="footer-sticky bg-dark text-center text-white" style={{marginBottom:"0px"}}>
      <div
        className="text-center p-3"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      >
        © 2020 Copyright: 
        <a className="text-white" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
    </footer>
  );
}
