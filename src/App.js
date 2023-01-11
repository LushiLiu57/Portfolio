import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Education from './pages/Education'

import Nav from './components/Nav'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/education' element={<Education />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
