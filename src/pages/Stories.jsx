
import React from 'react';
import { motion } from 'framer-motion';

const Stories = () => {
  const stories = [
    {
      id: 1,
      title: "My Mother's Strength",
      author: "Sarah Johnson",
      content: "Through every challenge, my mother showed incredible resilience...",
      image: "mother-strength"
    },
    {
      id: 2,
      title: "Cooking with Mom",
      author: "Michael Chen",
      content: "The kitchen was always filled with love and laughter...",
      image: "cooking-mom"
    },
    {
      id: 3,
      title: "Life Lessons",
      author: "Emma Davis",
      content: "The wisdom she shared continues to guide me today...",
      image: "life-lessons"
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
        <h1 className="text-4xl font-bold text-gray-900">Stories of Love</h1>
        <p className="mt-4 text-lg text-gray-600">
          Read heartwarming stories shared by our community about their mothers.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {stories.map((story, index) => (
          <motion.article
            key={story.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <img  
              className="w-full h-48 object-cover" 
              alt={`Story about ${story.title}`}
             src="https://images.unsplash.com/photo-1672172633490-0e4280e54ab3" />
            
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">{story.title}</h3>
              <p className="mt-2 text-sm text-gray-500">By {story.author}</p>
              <p className="mt-4 text-gray-600">{story.content}</p>
              <button className="mt-4 text-primary hover:text-primary/80 font-medium">
                Read more
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default Stories;
