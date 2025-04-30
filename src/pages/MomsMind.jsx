
import React from 'react';
import { motion } from 'framer-motion';

const MomsMind = () => {
  const thoughts = [
    {
      title: "Why I Always Wake Up Before You",
      date: "April 29, 2025",
      content: "Those quiet morning moments are my sanctuary. When the house is still sleeping, I can hear my own thoughts, plan our day, and simply breathe. It's not just about making breakfast or preparing for the day – it's my meditation, my moment of peace before the beautiful chaos begins."
    },
    {
      title: "The Worries I Keep to Myself",
      date: "April 28, 2025",
      content: "Every time you leave the house, a part of my heart walks with you. I worry about the smallest things, but I've learned to smile and wave goodbye. Because I know that letting you spread your wings is more important than keeping you in my nest forever."
    }
  ];

  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h1 className="text-4xl font-bold text-gray-900">Mom's Mind</h1>
        <p className="mt-4 text-lg text-gray-600">
          Thoughts, reflections, and the quiet moments that shape a mother's world.
        </p>
      </motion.div>

      <div className="mt-16 space-y-12">
        {thoughts.map((thought, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden p-8"
          >
            <div className="max-w-prose mx-auto">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                {thought.title}
              </h2>
              <time className="text-sm text-gray-500 mb-4 block">
                {thought.date}
              </time>
              <p className="text-gray-600 leading-relaxed">
                {thought.content}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default MomsMind;
