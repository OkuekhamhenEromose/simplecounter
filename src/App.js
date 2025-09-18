// 🔹 React Logic (the brain of the app)
// const [count, setCount] = useState(0);
// useState(0) creates a state variable called count (starting at 0).
// setCount is a function that updates the state.
// Whenever setCount changes the value, React re-renders the component → updating the UI instantly.
// Buttons:
// onClick={() => setCount(count + 1)}   // increments
// onClick={() => setCount(count - 1)}   // decrements
// When you click Increment, it adds +1.
// When you click Decrement, it subtracts -1.
// React automatically updates the {count} displayed.
// 🔹 Tailwind Styling (the clothes of the app 👔)
// 1. Page Container
// <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
// bg-gray-100: light gray background.
// min-h-screen: fills the entire screen height.
// flex items-center justify-center: centers everything horizontally & vertically.
// p-4: padding around the edges.
// 2. Card Container
// <div className="bg-white p-12 rounded-2xl shadow-xl text-center">
// bg-white: white background (like a card).
// p-12: generous padding inside.
// rounded-2xl: large rounded corners → soft modern look.
// shadow-xl: deep drop shadow → gives it a floating effect.
// text-center: aligns text inside to the center.
// 3. Title
// <h1 className="text-4xl font-extrabold mb-6 text-gray-800">
//   React Counter
// </h1>
// text-4xl: large heading size.
// font-extrabold: heavy bold weight.
// mb-6: margin bottom for spacing.
// text-gray-800: dark gray color → easy to read.
// 4. Counter Number
// <p className="text-6xl font-black mb-8 text-blue-600">{count}</p>
// text-6xl: huge number for emphasis.
// font-black: boldest weight available.
// mb-8: spacing below.
// text-blue-600: blue color → visually striking.
// 5. Buttons Row
// <div className="flex justify-center gap-4">
// flex: makes the buttons sit side by side.
// justify-center: centers them.
// gap-4: spacing between buttons.
// 6. Button Styles
// Increment
// className="bg-green-500 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-green-600 transition-colors focus:outline-none focus:ring-4 focus:ring-green-300"
// bg-green-500: green background.
// hover:bg-green-600: darker green when hovered.
// text-white font-bold: bold white text.
// py-4 px-8: big padding → nice clickable button.
// rounded-full: pill-shaped button.
// shadow-lg: nice depth.
// transition-colors: smooth hover animation.
// focus:ring-4: accessibility → ring glow when focused.
// Decrement
// bg-red-500 ... hover:bg-red-600 focus:ring-red-300
// Same as increment, but in red (signals subtraction).


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
