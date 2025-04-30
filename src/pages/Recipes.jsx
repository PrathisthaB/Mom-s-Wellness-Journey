import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SearchBar from '@/components/SearchBar';
import CategoryFilter from '@/components/CategoryFilter';
import ReadingTime from '@/components/ReadingTime';

const Recipes = () => {
  const categories = ['Breakfast', 'Lunch', 'Dinner', 'Snacks', 'Smoothies'];
  const [activeCategory, setActiveCategory] = useState('all');

  const recipes = [
    {
      id: 1,
      title: "Protein-Rich Moong Dal Chilla",
      content: "Start your day with this healthy and protein-packed moong dal chilla. Made from soaked and blended split green gram, seasoned with Indian spices and veggies. Serve with mint chutney for an energizing start!",
      category: "Breakfast",
      date: "April 29, 2025",
      image: (
        <img
          alt="Moong Dal Chilla"
          src="https://www-indianveggiedelight-com.translate.goog/wp-content/uploads/2023/03/moong-dal-chilla.jpg?_x_tr_sl=en&_x_tr_tl=hi&_x_tr_hl=hi&_x_tr_pto=imgs"
          className="w-full h-60 object-cover"
        />
      )
    },
    {
      id: 2,
      title: "Kid-Friendly Vegetable Pulao",
      content: "A colorful and flavorful one-pot rice dish loaded with hidden veggies like peas, carrots, and beans. Seasoned with mild Indian spices, it’s perfect for kids and adults alike.",
      category: "Dinner",
      date: "April 28, 2025",
      image: (
        <img
          alt="Vegetable Pulao"
          src="https://maayeka.com/wp-content/uploads/2024/09/veg-Pulao.jpg"
          className="w-full h-60 object-cover"
        />
      )
    },
    {
      id: 3,
      title: "Maharashtrian Kanda Poha",
      content: "A light, fluffy, and quick-to-make flattened rice dish flavored with turmeric, curry leaves, and mustard seeds, topped with crunchy peanuts and a squeeze of lemon.",
      category: "Breakfast",
      date: "April 27, 2025",
      image: (
        <img
          alt="Poha"
          src="https://img-global.cpcdn.com/recipes/fd9e3c981fe7167c/680x482cq70/%E0%A4%95%E0%A4%A6-%E0%A4%AA%E0%A4%B9-%E0%A4%AE%E0%A4%B9%E0%A4%B0%E0%A4%B7%E0%A4%9F%E0%A4%B0-%E0%A4%B8%E0%A4%9F%E0%A4%88%E0%A4%B2-%E0%A4%AEkanda-poha-recipe-in-hindi-%E0%A4%B0%E0%A4%B8%E0%A4%AA-%E0%A4%AE%E0%A4%96%E0%A4%AF-%E0%A4%A4%E0%A4%B8%E0%A4%B5%E0%A4%B0.jpg"
          className="w-full h-60 object-cover"
        />
      )
    },
    {
      id: 4,
      title: "Comforting Rajma Chawal",
      content: "A North Indian classic made with kidney beans simmered in onion-tomato gravy and served with steamed basmati rice. Packed with protein and flavor!",
      category: "Lunch",
      date: "April 26, 2025",
      image: (
        <img
          alt="Rajma Chawal"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ2R3FJk9RJI9-1Ke3yTsz8g4du-rD--4DSg&s"
          className="w-full h-60 object-cover"
        />
      )
    }
  ];

  const [filteredRecipes, setFilteredRecipes] = useState(recipes);

  const handleSearch = (results) => {
    setFilteredRecipes(results);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    if (category === 'all') {
      setFilteredRecipes(recipes);
    } else {
      setFilteredRecipes(recipes.filter(recipe => recipe.category === category));
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
        <h1 className="text-4xl font-bold text-center mb-8">Healthy Indian Recipes</h1>

        <SearchBar data={recipes} onSearch={handleSearch} />
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />

        <div className="grid gap-8 md:grid-cols-2">
          {filteredRecipes.map((recipe, index) => (
            <motion.article
              key={recipe.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              {recipe.image}
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-primary">{recipe.category}</span>
                  <ReadingTime content={recipe.content} />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{recipe.title}</h2>
                <p className="text-gray-600 mb-4">{recipe.content}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{recipe.date}</span>
                  <button className="text-primary hover:text-primary/80">
                    Save Recipe
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

export default Recipes;
