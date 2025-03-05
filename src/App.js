import './style.css'
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Courses from './Courses';
import Register from './Register';
import Contact from './Contact';
import Admin from './Admin'
import Variable from './Variable';
import Login from './Login';
import Dashboard from './Dashboard';
import Footer from './Footer';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='courses' element={<Courses />} />
        <Route path='Register' element={<Register />} />
        <Route path='contact' element={<Contact />} />
        <Route path='admin' element={<Admin />} />
        <Route path='variable' element={<Variable />} />
        <Route path='Login' element={<Login />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='footer' element={<Footer />} />

      </Routes>
    </>

  )
}

export default App;