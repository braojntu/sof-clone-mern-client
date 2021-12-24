import React from "react";
import css from "./headerFooter.module.css";

const Footer = () => {
  return (
    <footer className={css.footer_copyright_block}>
      <div className={css.footer_copyright}>
        <a href="/" target="_blank" rel="noopener noreferrer">
          <div className={css.logo_icon}>
            <img src="/images/favicon.svg" alt="logo" />
          </div>
        </a>
        <div className={css.copyright_icon}>
          <img src="/images/copyright.png" alt="copyright" />
        </div>
      </div>{" "}
      <span className={css.footer_copyright_texts}>All rights reserved </span>
      <span className={css.footer_copyright_text}> 2021 - 2022</span>{" "}
    </footer>
  );
};

export default Footer;
