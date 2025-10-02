import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    
     <div className="w-full h-screen duration-200" style={{backgroundColor:color}} >
    
      <div className="flex gap-3 bg-white p-4 rounded-3xl shadow-lg">
        <button
          style={{ backgroundColor: "red" }}
          className="px-4 py-2 rounded-full text-white"
          onClick={() => setColor("red")}
        >
          Red
        </button>
        <button
          style={{ backgroundColor: "yellow" }}
          className="px-4 py-2 rounded-full text-black"
          onClick={() => setColor("yellow")}
        >
          Yellow
        </button>
        <button
          style={{ backgroundColor: "blue" }}
          className="px-4 py-2 rounded-full text-white"
          onClick={() => setColor("blue")}
        >
          Blue
        </button>
        <button
          style={{ backgroundColor: "purple" }}
          className="px-4 py-2 rounded-full text-white"
          onClick={() => setColor("purple")}
        >
          Purple
        </button>
      </div>
    </div>
  );
}

export default App;
