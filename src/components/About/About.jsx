import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import './About.css';

const About = () => {
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
          About Me
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
              <div className="image-placeholder">
                <User size={64} className="placeholder-icon" />
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="about-text-column"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="about-subtitle">Who am I?</h3>
            <p className="about-text">
              I am a dedicated software developer with a strong focus on building highly performant, 
              scalable, and visually appealing web applications. With a solid foundation in modern 
              JavaScript frameworks and backend architectures, I strive to create seamless user experiences.
            </p>
            <p className="about-text">
              My journey in tech is driven by curiosity and continuous learning. When I'm not coding, 
              you can find me exploring new technologies, contributing to open-source, or refining my UI/UX design skills.
            </p>

            <div className="info-grid">
              <div className="info-item">
                <MapPin size={20} className="info-icon" />
                <div>
                  <span className="info-label">Location</span>
                  <span className="info-value">Vietnam</span>
                </div>
              </div>
              <div className="info-item">
                <Briefcase size={20} className="info-icon" />
                <div>
                  <span className="info-label">Experience</span>
                  <span className="info-value">3+ Years</span>
                </div>
              </div>
              <div className="info-item">
                <GraduationCap size={20} className="info-icon" />
                <div>
                  <span className="info-label">Education</span>
                  <span className="info-value">Software Engineering</span>
                </div>
              </div>
            </div>
            
            <a href="#contact" className="btn-primary" style={{ marginTop: '20px' }}>
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
