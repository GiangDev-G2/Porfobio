import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Smartphone, MonitorPlay } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <MonitorPlay size={24} className="skill-icon" />,
      skills: ['React.js', 'Vite', 'HTML5 & CSS3', 'JavaScript (ES6+)', 'Tailwind CSS', 'Framer Motion']
    },
    {
      title: 'Backend Development',
      icon: <Server size={24} className="skill-icon" />,
      skills: ['Node.js', 'Express', 'C# / .NET', 'RESTful APIs', 'SQL Server', 'MongoDB']
    },
    {
      title: 'Tools & Ecosystem',
      icon: <Code size={24} className="skill-icon" />,
      skills: ['Git & GitHub', 'VS Code', 'Postman', 'Docker', 'Webpack', 'Figma']
    },
    {
      title: 'Other Skills',
      icon: <Smartphone size={24} className="skill-icon" />,
      skills: ['Responsive Design', 'Agile Methodology', 'Problem Solving', 'UI/UX Principles', 'Clean Code', 'Performance Optimization']
    }
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
          My Skills
        </motion.h2>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className="card skill-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="skill-header">
                <div className="icon-wrapper">
                  {category.icon}
                </div>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
