
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Sidebar = () => {
  const tips = [
    "Start your day with a glass of lemon water for natural detox",
    "Take 5 minutes of mindful breathing before bed",
    "Stretch while watching your favorite show",
    "Keep healthy snacks at eye level in your fridge",
    "Schedule 'me-time' like you schedule everything else"
  ];

  const randomTip = tips[Math.floor(Math.random() * tips.length)];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="w-80 p-6 space-y-8 hidden lg:block"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="quote-bubble bg-gradient-to-br from-primary/10 to-pink-100"
      >
        <h3 className="handwritten text-xl text-primary mb-4">Mom Tip of the Day</h3>
        <p className="text-sm text-gray-600 italic leading-relaxed">"{randomTip}"</p>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.02 }}
        className="quote-bubble bg-gradient-to-br from-primary/5 to-pink-50"
      >
        <h3 className="handwritten text-xl text-primary mb-4">Quick Links</h3>
        <ul className="space-y-3">
          <motion.li whileHover={{ x: 5 }} className="sidebar-link">
            <span>30-Minute Workouts</span>
            <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.li>
          <motion.li whileHover={{ x: 5 }} className="sidebar-link">
            <span>Meal Prep Ideas</span>
            <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.li>
          <motion.li whileHover={{ x: 5 }} className="sidebar-link">
            <span>Stress Relief Tips</span>
            <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.li>
          <motion.li whileHover={{ x: 5 }} className="sidebar-link">
            <span>Self-Care Guide</span>
            <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.li>
        </ul>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.02 }}
        className="quote-bubble bg-gradient-to-br from-primary/10 to-pink-100"
      >
        <h3 className="handwritten text-xl text-primary mb-3">Wellness Quote</h3>
        <p className="text-sm text-gray-600 italic leading-relaxed">
          "Taking care of yourself is part of taking care of your family."
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Sidebar;
