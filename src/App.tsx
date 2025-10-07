import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Testimonials from './Pages/Testimonials';
import Vaulet from './Pages/zamVaulet';

function App() {
  return (
    <Router>
      <div className="bg-white w-full text-gray-800 font-serif">    
        <Routes>
          {/* Home page route */}
          <Route path="/" element={<Home />} />
          
          {/* About Us page - points to your gem.tsx */}
          <Route path="/About" element={<About />} />
          
          {/* Add other routes as needed */}
          <Route path="/testimonial" element={<Testimonials />} />
          <Route path="/the-vault" element={<Vaulet />} />
          <Route path="/shop" element={<div>Shop Page</div>} />
          <Route path="/showrooms" element={<div>Showrooms Page</div>} />
          <Route path="/contact-us" element={<div>Contact Us Page</div>} />
          <Route path="/find-store" element={<div>Find a Store Page</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;