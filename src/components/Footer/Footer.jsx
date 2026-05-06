import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";
import "./Footer.css";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h2>
              GiangDev - <span>G2</span>
            </h2>
            <p>{t("footer_desc")}</p>
          </div>

          <div className="footer-social">
            <a href="#" className="social-link" aria-label="GitHub">
              <FaGithub size={20} />
            </a>
            <a href="#" className="social-link" aria-label="LinkedIn">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {currentYear} {t("footer_copy")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
