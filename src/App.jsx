import { useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState("white");

  function changeColor(color) {
    setColor(color);
  }

  return (
    <>
      <div
        className="h-screen w-full duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed bottom-10  inset-x-0 px-4 py-3  mb-4  flex flex-wrap justify-center">
          <div className="flex flex-wrap rounded-full bg-white shadow-lg px-3 py-4 gap-3 ">
            <button
              onClick={() => changeColor("red")}
              className=" text-2xl font-medium text-[red] transition duration-250 px-4 py-2 cursor-pointer hover:bg-[red] hover:text-2xl hover:text-[white] rounded-full shadow-lg"
            >
              Red
            </button>
            <button
              onClick={() => changeColor("green")}
              className="outline-none  text-2xl font-medium text-[green] px-4 py-2 transition duration-250 rounded-full cursor-pointer hover:bg-[green] hover:text-[white] shadow-lg"
            >
              Green
            </button>
            <button
              onClick={() => changeColor("blue")}
              className=" text-2xl font-medium text-[blue] px-4 py-2 transition duration-300 cursor-pointer hover:bg-[blue] hover:text-[white] rounded-full shadow-lg"
            >
              Blue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
