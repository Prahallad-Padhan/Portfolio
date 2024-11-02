// src/Home/index.js
import '@fortawesome/fontawesome-free/css/all.min.css';
import { motion } from 'framer-motion';
import './styles.css';

const Home = () => {

  return (
    <section id="home">
      <motion.h1
        initial={{ opacity: 0, y: 20 }} // Start faded out and slightly below
        animate={{ opacity: 1, y: 0 }} // End fully visible and in place
        transition={{ duration: 2, ease: 'easeOut' }} // Customize the animation timing
      >
        PRAHALLAD PADHAN
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }} // Delay for the paragraph
      >
        SOFTWARE ENGINEER & FULL STACK DEVELOPER.
      </motion.p>
      <div className="button-container">
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <button className="resume-button">Resume</button>
        </a>
        <a href="https://github.com/Prahallad-Padhan" target="_blank" rel="noopener noreferrer" className="icon-link">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/pp1325" target="_blank" rel="noopener noreferrer" className="icon-link">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </section>
  );
};

export default Home;
