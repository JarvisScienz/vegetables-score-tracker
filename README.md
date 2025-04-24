# Plant-Based Food Score Tracker

A React web application that helps users track their plant-based food consumption and achieve the goal of 30+ plant points per week.

## Features

- Clean, responsive UI built with React and TailwindCSS
- Collapsible accordions for different food categories
- Real-time point calculation
- Sticky score counter
- Support for multiple varieties of the same food
- Easy to customize and extend

## Categories and Points

- Fruits (1 point per item)
- Vegetables (1 point per item)
- Legumes & Pulses (1 point per item)
- Whole Grains (1 point per item)
- Nuts & Seeds (1 point per item)
- Herbs & Spices (0.25 points per item)
- Extras (0.5 points for vegetable broth, 0.25 points for others)

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Technologies Used

- React
- TypeScript
- TailwindCSS
- @headlessui/react
- @heroicons/react

## Customization

To add or modify food items, edit the `src/data/foodItems.ts` file. The data structure is designed to be easily extensible.

## License

MIT
