import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Store, User, LogOut, Package, Menu, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass shadow-glass py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className={`p-2 rounded-xl transition-all duration-300 ${
              scrolled ? 'bg-brand-700' : 'bg-white/10 backdrop-blur-sm'
            }`}>
              <Store className="h-6 w-6 text-white" />
            </div>
            <span className={`text-xl font-display font-bold transition-colors duration-300 ${
              scrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Style<span className="text-gradient">Store</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-1">
            {['inicio', 'sobre', 'produtos', 'contato'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  scrolled
                    ? 'text-gray-600 hover:text-brand-700 hover:bg-brand-50'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            {user ? (
              <div className="hidden sm:flex items-center space-x-3">
                <Link
                  to="/cadastro-produtos"
                  className="flex items-center space-x-2 bg-brand-700 text-white px-4 py-2 rounded-full hover:bg-brand-800 transition-all duration-300 text-sm font-medium"
                >
                  <Package className="h-4 w-4" />
                  <span>Cadastrar</span>
                </Link>
                <div className={`flex items-center space-x-2 text-sm ${
                  scrolled ? 'text-gray-500' : 'text-white/70'
                }`}>
                  <User className="h-4 w-4" />
                  <span className="hidden lg:block">{user.email}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-full text-sm transition-all duration-300 ${
                    scrolled
                      ? 'text-gray-500 hover:text-red-600 hover:bg-red-50'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <LogOut className="h-4 w-4" />
                  <span className="hidden lg:block">Sair</span>
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className={`hidden sm:flex items-center space-x-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  scrolled
                    ? 'bg-brand-700 text-white hover:bg-brand-800'
                    : 'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20'
                }`}
              >
                <User className="h-4 w-4" />
                <span>Login</span>
              </Link>
            )}

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10">
            <div className="flex flex-col space-y-1 pt-4">
              {['inicio', 'sobre', 'produtos', 'contato'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`px-4 py-3 rounded-lg text-left text-sm font-medium transition-colors ${
                    scrolled
                      ? 'text-gray-700 hover:bg-gray-100'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
              {user ? (
                <>
                  <Link
                    to="/cadastro-produtos"
                    className="px-4 py-3 text-brand-700 font-medium text-sm"
                    onClick={() => setMobileOpen(false)}
                  >
                    Cadastrar Produto
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-3 text-left text-red-600 text-sm"
                  >
                    Sair
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="mx-4 mt-2 text-center bg-brand-700 text-white px-4 py-3 rounded-full text-sm font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
