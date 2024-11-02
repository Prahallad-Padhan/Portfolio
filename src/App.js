import './App.css';
import React from 'react';
import Header from './Header';
import Home from './Home';
import Skills from './Skills';
import Work from './Work';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Skills />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
