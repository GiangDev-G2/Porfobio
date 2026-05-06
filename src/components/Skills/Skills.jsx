import React from "react";
import { motion } from "framer-motion";
import { Code, Server, Smartphone, MonitorPlay } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "./Skills.css";

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t("skills_cat1"),
      icon: <MonitorPlay size={24} className="skill-icon" />,
      skills: [
        "React.js",
        "Vite",
        "HTML5 & CSS3",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "Framer Motion",
      ],
    },
    {
      title: t("skills_cat2"),
      icon: <Server size={24} className="skill-icon" />,
      skills: [
        "Node.js",
        "Python",
        "C# / .NET",
        "RESTful APIs",
        "SQL Server",
        "MongoDB",
      ],
    },
    {
      title: t("skills_cat3"),
      icon: <Code size={24} className="skill-icon" />,
      skills: [
        "Git & GitHub",
        "VS Code",
        "Android Studio",
        "Docker",
        "SQL Management Studio",
        "Figma",
      ],
    },
    {
      title: t("skills_cat4"),
      icon: <Smartphone size={24} className="skill-icon" />,
      skills: [
        t("skill_responsive"),
        t("skill_agile"),
        t("skill_problem"),
        t("skill_uiux"),
        t("skill_clean"),
        t("skill_perf"),
      ],
    },
  ];

  return (
    <section className="section bg-alt" id="skills">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t("skills_title")}
        </motion.h2>

        <div className="skills-carousel-container">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            initialSlide={1}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination]}
            className="skills-swiper"
          >
            {skillCategories.map((category, index) => (
              <SwiperSlide key={index} className="skill-slide">
                <div className="card skill-card">
                  <div className="skill-header">
                    <div className="icon-wrapper">{category.icon}</div>
                    <h3>{category.title}</h3>
                  </div>
                  <ul className="skill-list">
                    {category.skills.map((skill, i) => (
                      <li key={i} className="skill-item">
                        <span className="skill-bullet"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Skills;
