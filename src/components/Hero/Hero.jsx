import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import hinhNenDark from "../../assets/HinhNen.png";
import hinhNenLight from "../../assets/HinhNen-light.png";
import "./Hero.css";

const Hero = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const heroImage = theme === "dark" ? hinhNenDark : hinhNenLight;

  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="greeting">{t("hero_greeting")}</span>
          <h1 className="name">{t("hero_name")}</h1>
          <h2 className="title">{t("hero_title")}</h2>
          <p className="description">{t("hero_desc")}</p>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              {t("hero_btn_work")} <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn-outline">
              {t("hero_btn_contact")}
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >

          <img src={heroImage} alt="Hero" className="hero-img" />

          {/* Floating Decorations */}
          <div className="decor zigzag">
            <svg
              width="40"
              height="15"
              viewBox="0 0 40 15"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M1 7.5L8 1L15 7.5L22 1L29 7.5L36 1" />
            </svg>
          </div>
          <div className="decor circle"></div>
          <div className="decor triangle">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polygon points="15,2 28,25 2,25" />
            </svg>
          </div>
          <div className="decor plus">+</div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
