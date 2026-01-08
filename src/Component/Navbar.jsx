import { useState } from "react";
import { Menu, X, User, LogOut } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import LoginModal from "./LoginModal";


function Navbar({ user, onLogin, onLogout }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const navigate = useNavigate();

  const menuItems = [
    { label: "होम", path: "/" },
    { label: "हमारे बारे में", path: "/about" },
    { label: "कार्यक्रम", path: "/events" },
    { label: "गैलरी", path: "/gallery" },
    { label: "दान करें", path: "/donation" },
    { label: "स्वयंसेवक बनें", path: "/volunteer" },
    { label: "संपर्क", path: "/contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => navigate("/home")}
            >
              <img
                src="durga.jpg"
                alt="logo"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h1 className="text-xl text-orange-900">
                  विवेक ज्योति नवदुर्गा समिति मसमासी
                </h1>
                <p className="text-xs text-gray-600">
                  Vivek Jyoti Navdurga Samiti Masmasi
                </p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6">
              {menuItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-600 font-semibold"
                      : "text-gray-700 hover:text-orange-600"
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full"
                  >
                    <User className="w-5 h-5" />
                    {user.name}
                  </button>

                  {showUserMenu && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2">
                      <div className="px-4 py-2 border-b text-sm text-gray-500">
                        {user.email}
                      </div>

                      <button
                        onClick={() => {
                          navigate("/userdashboard");
                          setShowUserMenu(false);
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-orange-50"
                      >
                        Dashboard
                      </button>

                      <button
                        onClick={onLogout}
                        className="w-full text-left px-4 py-2 hover:bg-orange-50 flex gap-2"
                      >
                        <LogOut className="w-4 h-4" />
                        
                        <Link to="/">Logout</Link>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => setIsLoginModalOpen(true)}
                  className="bg-red-600 text-white px-6 py-2 rounded-full flex gap-2"
                >
                  <User className="w-5 h-5" />
                  Login
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pt-4 border-t">
              {menuItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block py-2 ${
                      isActive
                        ? "text-orange-600 font-semibold"
                        : "text-gray-700"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              {user ? (
                <button
                  onClick={onLogout}
                  className="w-full mt-4 bg-red-600 text-white py-2 rounded-lg flex justify-center gap-2"
                >
                  <LogOut />
                  <Link to="/">Logout</Link>
                </button>
              ) : (
                <button
                  onClick={() => {
                    setIsLoginModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="w-full mt-4 bg-red-600 text-white py-2 rounded-lg"
                >
                  Login
                </button>
              )}
            </div>
          )}
        </div>
      </nav>
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLogin={onLogin}
      />
    </>

  );
}

export default Navbar;
