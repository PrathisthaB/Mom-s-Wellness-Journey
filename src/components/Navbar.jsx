
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Salad, Brain, Sparkles, Dumbbell } from 'lucide-react';
import useSound from 'use-sound';

const Navbar = () => {
  const location = useLocation();
  const [playSound] = useSound('/click.mp3', { volume: 0.5 });
  
  const links = [
    { href: '/recipes', label: 'Healthy Recipes', icon: Salad },
    { href: '/wellness', label: 'Mental Wellness', icon: Brain },
    { href: '/self-care', label: 'Self-care', icon: Sparkles },
    { href: '/fitness', label: 'Fitness Tips', icon: Dumbbell },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm"
    >
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 group">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Heart className="h-8 w-8 text-primary" />
          </motion.div>
          <span className="handwritten text-2xl gradient-text">Mom's Wellness Journey</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          {links.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              to={href}
              className="nav-link"
              onClick={() => playSound()}
            >
              <Icon className="mr-2 h-5 w-5" />
              <span>{label}</span>
              {location.pathname === href && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute inset-0 z-[-1] rounded-md bg-primary/10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30
                  }}
                />
              )}
            </Link>
          ))}
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
