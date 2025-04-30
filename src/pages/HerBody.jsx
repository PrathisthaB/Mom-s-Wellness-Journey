
import React from 'react';
import { motion } from 'framer-motion';

const HerBody = () => {
  const posts = [
    {
      title: "The Back Pain I Never Told You About",
      date: "April 29, 2025",
      content: "Years of carrying you, bending down to pick up toys, and working long hours have left their mark. But every ache carries a memory – of cuddles, of playtime, of the countless moments that made it all worthwhile."
    },
    {
      title: "Finding Strength in Vulnerability",
      date: "April 28, 2025",
      content: "Today, I chose to take care of myself. A simple yoga session, a quiet walk, a moment to acknowledge that my body has been through so much. It's not just about staying healthy – it's about showing you that self-care isn't selfish."
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
        <h1 className="text-4xl font-bold text-gray-900">Her Body</h1>
        <p className="mt-4 text-lg text-gray-600">
          Chronicles of strength, healing, and the physical journey of motherhood.
        </p>
      </motion.div>

      <div className="mt-16 space-y-12">
        {posts.map((post, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden p-8"
          >
            <div className="max-w-prose mx-auto">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                {post.title}
              </h2>
              <time className="text-sm text-gray-500 mb-4 block">
                {post.date}
              </time>
              <p className="text-gray-600 leading-relaxed">
                {post.content}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default HerBody;
