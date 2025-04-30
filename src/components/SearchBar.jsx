
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';
import Fuse from 'fuse.js';

const SearchBar = ({ data, onSearch }) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const fuse = new Fuse(data, {
    keys: ['title', 'content', 'category'],
    threshold: 0.3,
  });

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    
    if (!value.trim()) {
      onSearch(data);
      return;
    }

    const results = fuse.search(value).map(result => result.item);
    onSearch(results);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative w-full max-w-2xl mx-auto mb-8"
    >
      <div className={`relative transition-all duration-300 ${isFocused ? 'scale-105' : ''}`}>
        <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 transition-colors duration-300 ${isFocused ? 'text-primary' : 'text-gray-400'}`} />
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Search for wellness tips, recipes, and more..."
          className="search-input"
        />
      </div>
    </motion.div>
  );
};

export default SearchBar;
