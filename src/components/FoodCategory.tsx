import React, { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import { FoodCategory as FoodCategoryType, FoodItem } from '../data/foodItems';

interface FoodCategoryProps {
  category: FoodCategoryType;
  selectedItems: Set<string>;
  onItemToggle: (itemId: string, points: number) => void;
}

const FoodCategory: React.FC<FoodCategoryProps> = ({
  category,
  selectedItems,
  onItemToggle,
}) => {
  return (
    <div className="w-full px-4 py-2">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-green-100 px-4 py-2 text-left text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75">
                <span>{category.name}</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-green-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <div className="space-y-2">
                  {category.items.map((item) => (
                    <div key={item.id} className="flex items-center">
                      <input
                        type="checkbox"
                        id={item.id}
                        checked={selectedItems.has(item.id)}
                        onChange={() => onItemToggle(item.id, item.points)}
                        className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                      />
                      <label
                        htmlFor={item.id}
                        className="ml-2 block text-sm text-gray-900"
                      >
                        {item.name}
                        {item.varieties && (
                          <span className="text-xs text-gray-500 ml-1">
                            ({item.varieties.join(', ')})
                          </span>
                        )}
                      </label>
                    </div>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default FoodCategory; 