import React from "react";
import { motion } from "framer-motion";
import { MapPin, Briefcase, GraduationCap, Award } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import "./About.css";
import hinhNen from "../../assets/HinhNen.jpg";

const About = () => {
  const { t } = useLanguage();

  return (
    <section className="section" id="about">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t("about_title")}
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-image-column"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="image-frame">
              <img src={hinhNen} alt="Profile" className="profile-img" />
            </div>
          </motion.div>

          <motion.div
            className="about-text-column"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="about-subtitle">{t("about_subtitle")}</h3>
            <p className="about-text">{t("about_p1")}</p>
            <p className="about-text">{t("about_p2")}</p>

            <div className="info-grid">
              <div className="info-item">
                <MapPin size={20} className="info-icon" />
                <div>
                  <span className="info-label">{t("about_loc")}</span>
                  <span className="info-value">{t("about_loc_val")}</span>
                </div>
              </div>
              <div className="info-item">
                <Briefcase size={20} className="info-icon" />
                <div>
                  <span className="info-label">{t("about_exp")}</span>
                  <span className="info-value">{t("about_exp_val")}</span>
                </div>
              </div>
              <div className="info-item">
                <GraduationCap size={20} className="info-icon" />
                <div>
                  <span className="info-label">{t("about_edu")}</span>
                  <span className="info-value">{t("about_edu_val")}</span>
                </div>
              </div>
              <div className="info-item">
                <Award size={20} className="info-icon" />
                <div>
                  <span className="info-label">{t("about_cert")}</span>
                  <span className="info-value">{t("about_cert_val")}</span>
                </div>
              </div>
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
