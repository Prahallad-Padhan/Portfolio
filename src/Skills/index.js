// src/Skills/index.js
import React, { useState } from 'react';
import { FaReact, FaDesktop } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './styles.css';

const Skills = () => {
  const [leftCardInView, setLeftCardInView] = useState(false);
  const [rightCardInView, setRightCardInView] = useState(false);

  return (
    <div id="skills">
      <h2>My Skills</h2>
      <section className="skills-section">
        {/* Left card animation */}
        <motion.div
          className="skill-card"
          animate={leftCardInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          onViewportEnter={() => setLeftCardInView(true)}
          onViewportLeave={() => setLeftCardInView(false)}
          viewport={{ amount: 0.2 }}
        >
          <div className="skill-heading">
            <FaDesktop className="skill-icon" />
            <h3>Software Development</h3>
          </div>
          <p>Experience with databases, RESTful APIs using <span className="highlight">Node.js</span> and <span className="highlight">MongoDB</span>.</p>
          <p>Experienced in DSA and OOP: <span className="highlight">Python, Java, JavaScript, C.</span></p>
        </motion.div>

        {/* Right card animation */}
        <motion.div
          className="skill-card"
          animate={rightCardInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6 }}
          onViewportEnter={() => setRightCardInView(true)}
          onViewportLeave={() => setRightCardInView(false)}
          viewport={{ amount: 0.2 }}
        >
          <div className="skill-heading">
            <FaReact className="skill-icon" />
            <h3>Frontend Development</h3>
          </div>
          <p>Proficient in building interactive and responsive UI with <span className="highlight">React, NextJS, HTML, CSS, JavaScript.</span></p>
        </motion.div>
      </section>
    </div>
  );
};

export default Skills;
