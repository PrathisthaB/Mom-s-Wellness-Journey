
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SearchBar from '@/components/SearchBar';
import CategoryFilter from '@/components/CategoryFilter';
import ReadingTime from '@/components/ReadingTime';

const Wellness = () => {
  const categories = ['Stress Management', 'Meditation', 'Mental Health', 'Emotional Balance'];
  const [activeCategory, setActiveCategory] = useState('all');

  const articles = [
    {
      id: 1,
      title: "5-Minute Mindfulness for Busy Moms",
      content: "Finding time for mindfulness doesn't mean hours of meditation. Learn how to incorporate quick mindfulness practices into your daily routine - while doing dishes, during your morning coffee, or even during school pickup. These micro-moments of peace can transform your day.",
      category: "Meditation",
      date: "April 29, 2025",
      image: <img  alt="Woman practicing mindfulness" className="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1490214207570-36768385a5da" />
    },
    {
      id: 2,
      title: "Managing Mom Anxiety: A Gentle Approach",
      content: "Mom anxiety is real and valid. This guide offers practical strategies for managing anxious thoughts, setting realistic expectations, and finding support when you need it. Remember, taking care of your mental health is taking care of your family.",
      category: "Mental Health",
      date: "April 28, 2025",
      image: <img  alt="Calming wellness scene" className="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1661110543346-dd3ef6488da1" />
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
        <h1 className="text-4xl font-bold text-center mb-8">Mental Wellness</h1>
        
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

export default Wellness;
