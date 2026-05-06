import React from "react";
import { motion } from "framer-motion";
import { Coffee, Gamepad2, Camera, Plane, Music, BookOpen } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import "./Hobbies.css";

const Hobbies = () => {
  const { t } = useLanguage();

  const hobbiesList = [
    { name: t("hobby_gaming"), icon: <Gamepad2 size={32} /> },
    { name: t("hobby_photo"), icon: <Camera size={32} /> },
    { name: t("hobby_travel"), icon: <Plane size={32} /> },
    { name: t("hobby_music"), icon: <Music size={32} /> },
    { name: t("hobby_reading"), icon: <BookOpen size={32} /> },
  ];

  return (
    <section className="section" id="hobbies">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t("hobbies_title")}
        </motion.h2>

        <div className="hobbies-grid">
          {hobbiesList.map((hobby, index) => (
            <motion.div
              className="hobby-item"
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="hobby-icon">{hobby.icon}</div>
              <span className="hobby-name">{hobby.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
