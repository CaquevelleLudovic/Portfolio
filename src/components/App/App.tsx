import './App.scss';
import Home from '../Home/Home';
import Contact from '../Contact/Contact';
import About from '../About/About';
import Works from '../Works/Works';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/About" element={<About />} />
      <Route path="/Works" element={<Works />} />
    </Routes>
  );
}

export default App;

