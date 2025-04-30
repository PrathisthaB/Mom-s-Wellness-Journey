
import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

const ViewToggle = ({ view, setView }) => {
  return (
    <div className="fixed top-20 right-4 bg-white rounded-full shadow-lg p-2 z-50">
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setView(view === 'mother' ? 'child' : 'mother')}
        className="flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10"
      >
        {view === 'mother' ? (
          <>
            <Sun className="h-4 w-4" />
            <span className="text-sm">Mother's View</span>
          </>
        ) : (
          <>
            <Moon className="h-4 w-4" />
            <span className="text-sm">Child's View</span>
          </>
        )}
      </motion.button>
    </div>
  );
};

export default ViewToggle;
