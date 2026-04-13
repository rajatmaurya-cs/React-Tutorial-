import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../store/slices/counterSlice';

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="my-5 p-6 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold mb-4">Counter: {count}</h2>
      <div className="flex gap-4">
        <button 
          onClick={() => dispatch(increment())}
          className="px-5 py-2.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors cursor-pointer"
        >
          Increase (+)
        </button>
        <button 
          onClick={() => dispatch(decrement())}
          className="px-5 py-2.5 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors cursor-pointer"
        >
          Decrease (-)
        </button>
      </div>
    </div>
  );
}
