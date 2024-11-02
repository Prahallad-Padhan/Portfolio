// src/Work/index.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import night from '../assets/night.jpg';
import food from '../assets/food.png';
import peak from '../assets/peak.png';
import travel from '../assets/travel.png';
import './styles.css';

const Work = () => {
  const [card1InView, setCard1InView] = useState(false);
  const [card2InView, setCard2InView] = useState(false);
  const [card3InView, setCard3InView] = useState(false);
  const [card4InView, setCard4InView] = useState(false);

  return (
    <div id="work">
      <h2>My Work_2024</h2>
      <section className="work-section">
        <motion.div
          className="work-card"
          animate={card1InView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          onViewportEnter={() => setCard1InView(true)}
          onViewportLeave={() => setCard1InView(false)}
          viewport={{ amount: 0.2 }}
        >
          <a href="https://github.com/Prahallad-Padhan/ResultX.git" target="_blank" rel="noopener noreferrer">
            <img src={night} alt="Project 1" className="work-image" />
          </a>
          <h3>Result-X</h3>
        </motion.div>

        <motion.div
          className="work-card"
          animate={card2InView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6 }}
          onViewportEnter={() => setCard2InView(true)}
          onViewportLeave={() => setCard2InView(false)}
          viewport={{ amount: 0.2 }}
        >
          <a href="https://github.com/Prahallad-Padhan/Peak-Fit.git" target="_blank" rel="noopener noreferrer">
            <img src={peak} alt="Project 2" className="work-image" />
          </a>
          <h3>Peak-Fit</h3>
        </motion.div>

        <motion.div
          className="work-card"
          animate={card3InView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          onViewportEnter={() => setCard3InView(true)}
          onViewportLeave={() => setCard3InView(false)}
          viewport={{ amount: 0.2 }}
        >
          <a href="https://github.com/Prahallad-Padhan/Travel-Search-Engine.git" target="_blank" rel="noopener noreferrer">
            <img src={travel} alt="Project 3" className="work-image" />
          </a>
          <h3>Travel Search Engine</h3>
        </motion.div>

        <motion.div
          className="work-card"
          animate={card4InView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6 }}
          onViewportEnter={() => setCard4InView(true)}
          onViewportLeave={() => setCard4InView(false)}
          viewport={{ amount: 0.2 }}
        >
          <a href="https://github.com/Prahallad-Padhan/-Hunger-Help.git" target="_blank" rel="noopener noreferrer">
            <img src={food} alt="Project 4" className="work-image" />
          </a>
          <h3>Hunger-Help</h3>
        </motion.div>
      </section>
    </div>
  );
};

export default Work;
