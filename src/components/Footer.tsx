import React from "react";
import Logo from "../assests/CatwikiLogo.svg";

const Footer = () => {
  return (
    <div className="footer">
      <img className="Logo-footer" src={Logo.toString()} alt="Logo" />
      <p>
        created by{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/adrianjose01"
        >
          adrianjose01
        </a>{" "}
        - devChanllenge.io 2023
      </p>
    </div>
  );
};

export default Footer;
