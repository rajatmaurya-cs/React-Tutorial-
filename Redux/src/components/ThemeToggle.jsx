import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../store/slices/themeSlice';

export function ThemeToggle() {
  const theme = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  return (
    <div className="my-5 p-6 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm flex flex-col items-start">
      <h2 className="text-2xl font-semibold mb-4 capitalize">Current Theme: {theme}</h2>
      <button 
        onClick={() => dispatch(toggleTheme())}
        className="px-5 py-2.5 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 rounded-md hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors cursor-pointer font-medium"
      >
        Toggle Theme
      </button>
    </div>
  );
}
