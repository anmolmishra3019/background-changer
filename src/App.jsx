import { useState } from "react";

function App() {
  const [color, setColor] = useState("red");

  const colors = [
    { name: "Red", value: "red" },
    { name: "Green", value: "green" },
    { name: "Yellow", value: "yellow" },
    { name: "Blue", value: "blue" },
    { name: "Purple", value: "purple" },
    { name: "Orange", value: "orange" },
  ];

  return (
    <div
      className="min-h-screen w-full transition-colors duration-500 flex items-center justify-center"
      style={{ backgroundColor: color }}
    >
      {/* Main Content */}
      <div className="text-center px-4">
        <div className="mb-8">
          <p className="text-white/80 text-sm uppercase tracking-[4px] mb-3">
            React Project
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            Color Changer
          </h1>

          <p className="text-white/90 mt-3 text-sm md:text-base">
            Choose a color and change the background instantly
          </p>
        </div>

        {/* Color Buttons */}
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-2xl">
          <div className="flex flex-wrap justify-center gap-3 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-2xl">
            {colors.map((item) => (
              <button
                key={item.value}
                onClick={() => setColor(item.value)}
                className={`
                  px-5 py-2 rounded-full text-white font-semibold
                  shadow-md transition-all duration-200
                  hover:scale-105 hover:shadow-lg
                  active:scale-95
                  ${color === item.value ? "ring-2 ring-gray-800 ring-offset-2" : ""}
                `}
                style={{ backgroundColor: item.value }}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {/* Current Color */}
        <div className="mt-8">
          <span className="inline-block bg-black/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
            Current Color:{" "}
            <span className="font-bold capitalize">{color}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;