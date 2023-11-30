import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="container__footer">
      <div className="container__nav">
        <nav>
          <ul>
            <li><a href="/Works">Works</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="/Contact">Contact</a></li>
          </ul>
        </nav>
      </div>
      <div className="link__social__footer">
        <nav>
          <ul>
            <li><a href="https://github.com/CaquevelleLudovic">Git</a></li>
            <li><a href="www.google.fr">Inst</a></li>
            <li><a href="https://www.malt.fr/profile/ludoviccaquevelle">Malt</a></li>
            <li><a href="https://www.linkedin.com/in/ludovic-caquevelle/">Link</a></li>
          </ul>
        </nav>
      </div>
      <div className="footer__texte">
        <p>
          © 2021 Made by Caquevelle Ludovic. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;