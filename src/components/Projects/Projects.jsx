import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";
import "./Projects.css";

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: t("project1_title"),
      description: t("project1_desc"),
      tags: ["React", ".Net", "SQL Server", "REST API"],
      github: "#",
      demo: "#",
    },
    {
      title: t("project2_title"),
      description: t("project2_desc"),
      tags: ["C#", ".NET Core", "SQL Server"],
      github: "#",
      demo: "#",
    },
    {
      title: t("project3_title"),
      description: t("project3_desc"),
      tags: ["Java Script", "SupaBase", "Node.js", "JWT"],
      github: "#",
      demo: "#",
    },
    {
      title: t("project4_title"),
      description: t("project4_desc"),
      tags: ["React", ".Net", "Tailwind", "SQL Server"],
      github: "#",
      demo: "#",
    },
    {
      title: t("project5_title"),
      description: t("project5_desc"),
      tags: ["Python", ".NET", "React", "SQL Server"],
      github: "#",
      demo: "#",
    },
    {
      title: t("project6_title"),
      description: t("project6_desc"),
      tags: ["React", "Node.js", "SQL Server", "REST API"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section className="section bg-alt" id="projects">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t("projects_title")}
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              className="card project-card"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="project-links">
                <a
                  href={project.github}
                  className="project-link"
                  aria-label="GitHub Repository"
                >
                  <FaGithub size={20} /> {t("projects_code")}
                </a>
                <a
                  href={project.demo}
                  className="project-link primary"
                  aria-label="Live Demo"
                >
                  <ExternalLink size={20} /> {t("projects_demo")}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
