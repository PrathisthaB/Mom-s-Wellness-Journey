
import React from 'react';
import { motion } from 'framer-motion';

const Dreams = () => {
  const dreams = [
    {
      title: "My Dream Wasn't Big — It Was Just Mine",
      date: "April 29, 2025",
      content: "I once dreamed of opening a small bookstore. Nothing fancy, just a cozy corner where people could find stories that would change their lives like books changed mine. I put that dream on hold to raise you, and I don't regret it. But sometimes, when I pass by empty storefronts, I still imagine shelves lined with books and the smell of fresh coffee."
    },
    {
      title: "The Art I Still Create at Midnight",
      date: "April 28, 2025",
      content: "When everyone's asleep, I sometimes pull out my old sketchbook. The drawings aren't perfect, but they're mine. They're pieces of the person I was before becoming 'Mom,' and glimpses of who I'm still becoming. Maybe one day I'll show you these midnight creations."
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
        <h1 className="text-4xl font-bold text-gray-900">Dreams She Shelved</h1>
        <p className="mt-4 text-lg text-gray-600">
          Aspirations, hopes, and the dreams that still whisper in quiet moments.
        </p>
      </motion.div>

      <div className="mt-16 space-y-12">
        {dreams.map((dream, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden p-8"
          >
            <div className="max-w-prose mx-auto">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                {dream.title}
              </h2>
              <time className="text-sm text-gray-500 mb-4 block">
                {dream.date}
              </time>
              <p className="text-gray-600 leading-relaxed">
                {dream.content}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default Dreams;
