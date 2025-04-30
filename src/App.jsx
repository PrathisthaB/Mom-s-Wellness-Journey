
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Recipes from '@/pages/Recipes';
import Wellness from '@/pages/Wellness';
import SelfCare from '@/pages/SelfCare';
import Fitness from '@/pages/Fitness';
import Home from '@/pages/Home';

function App() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Navbar />
      <div className="container flex">
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/wellness" element={<Wellness />} />
            <Route path="/self-care" element={<SelfCare />} />
            <Route path="/fitness" element={<Fitness />} />
          </Routes>
        </main>
        <Sidebar />
      </div>
      <Toaster />
    </div>
  );
}

export default App;
