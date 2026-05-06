import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="greeting">Hello, I'm</span>
          <h1 className="name">A Passionate Developer</h1>
          <h2 className="title">Building Digital Experiences</h2>
          <p className="description">
            I specialize in crafting high-quality, modern web applications that are fast, accessible, and user-centric. 
            Let's build something amazing together.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              View Work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Using a placeholder gradient or illustration to represent the user since it's an abstract portfolio */}
          <div className="hero-shape">
            <div className="shape-inner">
               <span className="shape-text">&lt;/&gt;</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
