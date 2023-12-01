import React from "react";
import "./Footer.scss";
import { RiGithubFill, RiInstagramFill, RiLinkedinBoxFill } from "react-icons/ri";

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
            <li><a href="https://github.com/CaquevelleLudovic"><RiGithubFill className='logo__social'/></a></li>
            <li><a href="www.google.fr"><RiInstagramFill className='logo__social'/></a></li>
            <li><a href="https://www.malt.fr/profile/ludoviccaquevelle"><img src="src/assets/img/malt-svgrepo-com.svg" alt="Logo Malt" /></a></li>
            <li><a href="https://www.linkedin.com/in/ludovic-caquevelle/"><RiLinkedinBoxFill className='logo__social'/></a></li>
          </ul>
        </nav>
      </div>
      <div className="footer__texte">
        <p>
          © 2023 Made by Caquevelle Ludovic. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;