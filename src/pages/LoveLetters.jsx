
import React from 'react';
import { motion } from 'framer-motion';

const LoveLetters = () => {
  const letters = [
    {
      title: "I Didn't Cry When You Left. But I Wanted To.",
      date: "April 29, 2025",
      content: "Dear one, watching you walk into your first day of college, I held back tears. Not because I was sad, but because I was overwhelmed with pride. You were ready to fly, and I knew that all those years of preparing you for this moment had paid off. My heart was both breaking and soaring at the same time."
    },
    {
      title: "The Little Things I'll Never Forget",
      date: "April 28, 2025",
      content: "Your first word, your first step, the way you used to mispronounce 'spaghetti.' These memories are treasures I carry with me every day. Sometimes, when the house is too quiet, I find myself smiling at the echo of your childhood laughter."
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
        <h1 className="text-4xl font-bold text-gray-900">Love Letters</h1>
        <p className="mt-4 text-lg text-gray-600">
          Words from the heart, written with love to my children.
        </p>
      </motion.div>

      <div className="mt-16 space-y-12">
        {letters.map((letter, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden p-8"
          >
            <div className="max-w-prose mx-auto">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                {letter.title}
              </h2>
              <time className="text-sm text-gray-500 mb-4 block">
                {letter.date}
              </time>
              <p className="text-gray-600 leading-relaxed italic">
                {letter.content}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default LoveLetters;
