
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative min-h-[calc(100vh-4rem)]">
      <div className="hero-pattern absolute inset-0 z-0" />
      
      <div className="container relative z-10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Celebrate the Love of
              <span className="text-primary"> Mothers</span>
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Join us in celebrating the incredible journey of motherhood. Share your stories,
              memories, and gratitude for the amazing mothers in our lives.
            </p>
            
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to="/share">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Share Your Story
                </Button>
              </Link>
              <Link to="/gallery">
                <Button variant="outline" size="lg">
                  View Gallery
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <img  alt="Mother and child embracing" className="w-full h-48 object-cover rounded-md mb-4" src="https://images.unsplash.com/photo-1621292424246-2e10b78bc9e4" />
              <h3 className="text-lg font-semibold">Cherished Moments</h3>
              <p className="mt-2 text-gray-600">Every moment with mom is a treasure to keep forever.</p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-lg">
              <img  alt="Mother teaching child" className="w-full h-48 object-cover rounded-md mb-4" src="https://images.unsplash.com/photo-1605141377365-164b2aaebd73" />
              <h3 className="text-lg font-semibold">Guiding Light</h3>
              <p className="mt-2 text-gray-600">Mothers are our first teachers and lifelong mentors.</p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-lg">
              <img  alt="Multi-generational family" className="w-full h-48 object-cover rounded-md mb-4" src="https://images.unsplash.com/photo-1612152543437-489741fed6c3" />
              <h3 className="text-lg font-semibold">Legacy of Love</h3>
              <p className="mt-2 text-gray-600">The love of a mother spans generations.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
