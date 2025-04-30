
import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h1 className="text-4xl font-bold text-gray-900">Photo Gallery</h1>
        <p className="mt-4 text-lg text-gray-600">
          Beautiful moments captured with our mothers.
        </p>
      </motion.div>

      <motion.div 
        className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="relative group overflow-hidden rounded-2xl">
          <img  
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" 
            alt="Mother and daughter in garden"
           src="https://images.unsplash.com/photo-1651588933954-760dc0388e55" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <p className="text-white">Spring gardening with mom, creating beautiful memories together</p>
          </div>
        </div>

        <div className="relative group overflow-hidden rounded-2xl">
          <img  
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" 
            alt="Family celebration"
           src="https://images.unsplash.com/photo-1592306609516-bedf4c021593" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <p className="text-white">Celebrating mom's birthday with the whole family</p>
          </div>
        </div>

        <div className="relative group overflow-hidden rounded-2xl">
          <img  
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" 
            alt="Mother teaching crafts"
           src="https://images.unsplash.com/photo-1682718619682-7c95d660de72" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <p className="text-white">Learning the art of crafting from mom's creative spirit</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Gallery;
