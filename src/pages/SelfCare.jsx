
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SearchBar from '@/components/SearchBar';
import CategoryFilter from '@/components/CategoryFilter';
import ReadingTime from '@/components/ReadingTime';

const SelfCare = () => {
  const categories = ['Beauty', 'Relaxation', 'Spa at Home', 'Time Management'];
  const [activeCategory, setActiveCategory] = useState('all');

  const articles = [
    {
      id: 1,
      title: "Create Your 10-Minute Morning Self-Care Routine",
      content: "Transform your mornings with this quick but effective self-care routine. Learn how to maximize those precious minutes before the house wakes up. Includes skincare essentials, gentle stretches, and mindful practices that will set a positive tone for your entire day.",
      category: "Time Management",
      date: "April 29, 2025",
      image: <img  alt="Morning self-care routine" className="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1600634999623-864991678406" />
    },
    {
      id: 2,
      title: "DIY Spa Day: Pamper Yourself at Home",
      content: "Create a luxurious spa experience without leaving your bathroom. This guide includes easy-to-make face masks, relaxing bath soaks, and simple massage techniques. Perfect for when you need some me-time but can't get to the spa.",
      category: "Spa at Home",
      date: "April 28, 2025",
      image: <img  alt="Home spa setup" className="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1604249180474-3ebaf8747373" />
    }
  ];

  const [filteredArticles, setFilteredArticles] = useState(articles);

  const handleSearch = (results) => {
    setFilteredArticles(results);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    if (category === 'all') {
      setFilteredArticles(articles);
    } else {
      setFilteredArticles(articles.filter(article => article.category === category));
    }
  };

  return (
    <div className="py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center mb-8">Self-Care Routines</h1>
        
        <SearchBar data={articles} onSearch={handleSearch} />
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />

        <div className="grid gap-8 md:grid-cols-2">
          {filteredArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              {article.image}
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-primary">{article.category}</span>
                  <ReadingTime content={article.content} />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{article.title}</h2>
                <p className="text-gray-600 mb-4">{article.content}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{article.date}</span>
                  <button className="text-primary hover:text-primary/80">
                    Save Article
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SelfCare;
