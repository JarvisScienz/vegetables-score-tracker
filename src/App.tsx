import React, { useState } from 'react';
import { foodCategories } from './data/foodItems';
import FoodCategory from './components/FoodCategory';
import ScoreCounter from './components/ScoreCounter';
import SearchBar from './components/SearchBar';

function App() {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const [totalPoints, setTotalPoints] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleItemToggle = (itemId: string, points: number) => {
    const newSelectedItems = new Set(selectedItems);
    if (newSelectedItems.has(itemId)) {
      newSelectedItems.delete(itemId);
      setTotalPoints((prev) => prev - points);
    } else {
      newSelectedItems.add(itemId);
      setTotalPoints((prev) => prev + points);
    }
    setSelectedItems(newSelectedItems);
  };

  const handleReset = () => {
    setSelectedItems(new Set());
    setTotalPoints(0);
  };

  const filteredCategories = foodCategories.map(category => {
    const filteredItems = category.items.filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.varieties && item.varieties.some(variety => 
        variety.toLowerCase().includes(searchQuery.toLowerCase())
      ))
    );
    return { ...category, items: filteredItems };
  }).filter(category => category.items.length > 0);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-green-800 mb-8">
          Plant-Based Food Score Tracker
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Track your plant points to reach the goal of 30+ points per week!
        </p>
        
        <ScoreCounter totalPoints={totalPoints} />
        
        <SearchBar 
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onReset={handleReset}
        />
        
        <div className="space-y-4">
          {filteredCategories.map((category) => (
            <FoodCategory
              key={category.id}
              category={category}
              selectedItems={selectedItems}
              onItemToggle={handleItemToggle}
            />
          ))}
          {filteredCategories.length === 0 && (
            <div className="text-center text-gray-500 py-4">
              No food items found matching your search.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
