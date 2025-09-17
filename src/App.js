import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white p-12 rounded-2xl shadow-xl text-center">
        <h1 className="text-4xl font-extrabold mb-6 text-gray-800">React Counter</h1>
        <p className="text-6xl font-black mb-8 text-blue-600">{count}</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setCount(count + 1)}
            className="bg-green-500 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-green-600 transition-colors focus:outline-none focus:ring-4 focus:ring-green-300"
          >
            Increment
          </button>
          <button
            onClick={() => setCount(count - 1)}
            className="bg-red-500 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-red-600 transition-colors focus:outline-none focus:ring-4 focus:ring-red-300"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
