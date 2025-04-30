
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SearchBar from '@/components/SearchBar';
import CategoryFilter from '@/components/CategoryFilter';
import ReadingTime from '@/components/ReadingTime';

const Fitness = () => {
  const categories = ['Quick Workouts', 'Yoga', 'Strength Training', 'Post-Pregnancy'];
  const [activeCategory, setActiveCategory] = useState('all');

  const articles = [
    {
      id: 1,
      title: "10-Minute Living Room Workout for Busy Moms",
      content: "No gym? No problem! This efficient workout routine uses just your body weight and can be done while the kids play nearby. Perfect for maintaining strength and energy throughout your busy day. Includes modifications for all fitness levels.",
      category: "Quick Workouts",
      date: "April 29, 2025",
      image: <img  alt="Home workout scene" className="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1562267080-d81e750b286b" />
    },
    {
      id: 2,
      title: "Gentle Postpartum Yoga Sequence",
      content: "A nurturing yoga practice designed specifically for new moms. This sequence focuses on rebuilding core strength, relieving back tension, and finding moments of calm. Remember to get clearance from your healthcare provider before starting any postpartum exercise.",
      category: "Post-Pregnancy",
      date: "April 28, 2025",
      image: <img  alt="Postpartum yoga" className="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1625402641969-76827ed13636" />
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
        <h1 className="text-4xl font-bold text-center mb-8">Fitness Tips</h1>
        
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

export default Fitness;
