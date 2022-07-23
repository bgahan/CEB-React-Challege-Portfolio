import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AboutMe from './pages/AboutMe/AboutMe';
import Contact from './pages/Contact/Contact';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route exact path ='/' element={<AboutMe/>} />
          <Route exact path ='/portfolio' element={<Portfolio/>} />
          <Route exact path ='/contact-me' element={<Contact/>} />
          <Route exact path ='/resume' element={<Resume/>} />
        </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;