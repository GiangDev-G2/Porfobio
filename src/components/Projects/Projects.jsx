import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with advanced search, cart management, and secure payment processing. Built for high performance and scalability.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Business Management System',
      description: 'An enterprise-level dashboard for managing customers, products, and sales reports with real-time data visualization.',
      tags: ['C#', '.NET Core', 'SQL Server', 'React'],
      github: '#',
      demo: '#',
    },
    {
      title: 'AI Support Helpdesk',
      description: 'A hybrid RAG Helpdesk integrating Llama 3 for intelligent intent classification and automated response generation.',
      tags: ['Python', 'FastAPI', 'React', 'LLMs'],
      github: '#',
      demo: '#',
    }
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
          Featured Projects
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
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="project-links">
                <a href={project.github} className="project-link" aria-label="GitHub Repository">
                  <FaGithub size={20} /> Code
                </a>
                <a href={project.demo} className="project-link primary" aria-label="Live Demo">
                  <ExternalLink size={20} /> Live Demo
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
