import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Component/Navbar";
import Index from "./Component/Index";
import Home from "./Component/Home";
import About from "./Component/About";
import Event from "./Component/Event";
import Gallery from "./Component/Gallery";
import Donation from "./Component/Donation";
import VolunteerForm from "./Component/VolunteerForm";
import Contact from "./Component/Contact";
import UserDashboard from "./Component/UserDasboard";
import Footer from "./Component/Footer";


function App() {
  const [user, setUser] = useState(null);
  const [showDashboard, setShowDashboard] = useState(false);

  const handleLogin = (userData) => {
    setUser(userData);
    setShowDashboard(true);
  };

  const handleLogout = () => {
    setUser(null);
    setShowDashboard(false);
  };

  return (
    <>
      <Navbar
        user={user}
        onLogin={handleLogin}
        onLogout={handleLogout}
        onShowDashboard={() => setShowDashboard(true)}
      />

      {user && showDashboard ? (
        <div className="min-h-screen bg-orange-50 pt-20">
          <UserDashboard user={user} onLogout={handleLogout} />

          <div className="text-center py-8">
            <button
              onClick={() => setShowDashboard(false)}
              className="bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition-all shadow-lg"
            >
              ← वापस होम पेज पर जाएं
            </button>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Event />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/volunteer" element={<VolunteerForm />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      )}

      <Footer />
    </>
  );
}

export default App;
