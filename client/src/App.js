import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import AboutMe from './pages/AboutMe/AboutMe';
import Contact from './pages/Contact/Contact';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route exact path ='/' element={<Home/>} />
          <Route exact path ='/about-me' element={<AboutMe/>} />
          <Route exact path ='/contact-me' element={<Contact/>} />
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;