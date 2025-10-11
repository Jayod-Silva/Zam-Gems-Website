import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Testimonials from './Pages/Testimonials';
import Vaulet from './Pages/zamVaulet';
import Showroom from './Pages/Showroom';
import Header from './components/Header';
import Contact from './Pages/Contact'
import ScrollToHashElement from './components/ScrollToHashElement';

function App() {
  return (
    <Router>
      <div className="bg-white w-full text-gray-800 font-serif">
        {/* Global Header */}
        <Header />

        {/* Scroll handler for hash navigation */}
        <ScrollToHashElement />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/testimonial" element={<Testimonials />} />
          <Route path="/the-vault" element={<Vaulet />} />
          <Route path="/shop" element={<div>Shop Page</div>} />
          <Route path="/showrooms" element={<Showroom />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
