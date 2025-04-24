import React from 'react';

interface ScoreCounterProps {
  totalPoints: number;
}

const ScoreCounter: React.FC<ScoreCounterProps> = ({ totalPoints }) => {
  return (
    <div className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg z-50">
      <div className="text-2xl font-bold">Total Points: {totalPoints.toFixed(2)}</div>
      <div className="text-sm">Goal: 30+ points per week</div>
    </div>
  );
};

export default ScoreCounter; 