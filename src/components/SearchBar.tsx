import React from 'react';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onReset: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, onSearchChange, onReset }) => {
  return (
    <div className="flex gap-4 mb-6">
      <div className="flex-1">
        <input
          type="text"
          placeholder="Search for food items..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
      </div>
      <button
        onClick={onReset}
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
      >
        Reset All
      </button>
    </div>
  );
};

export default SearchBar; 