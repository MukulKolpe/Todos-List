import React from "react";
import "./style.css"

export const Footer = () => {
    
  return (
    <footer className="footer">
      
      <a
        href="https://www.linkedin.com/in/mukulkolpe/"
        className="footer-link"
        target="_blank"
        rel="noreferrer"
      >
       <i class="fa fa-linkedin"></i>
      </a>
      <a
        href="https://twitter.com/MukulKolpe"
        className="footer-link"
        target="_blank"
        rel="noreferrer"
      >
       <i class="fa fa-twitter"></i>
      </a>

      <a
        href="https://github.com/MukulKolpe"
        className="footer-link"
        target="_blank"
        rel="noreferrer"
      >
       <i class="fa fa-github"></i>
      </a>

      <a
        href="https://www.instagram.com/mukul_kolpe/?hl=en"
        className="footer-link"
        target="_blank"
        rel="noreferrer"
      >
       <i class="fa fa-instagram"></i>
      </a>
      
    </footer>
  );
};
