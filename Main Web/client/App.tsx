import React, { useState } from "react";

const App: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);
  return (
    <div>
      <p>{counter}</p>
      <button
        onClick={() => {
          console.log(counter);
          setCounter((prev) => prev + 1);
        }}
      >
        Click!
      </button>
    </div>
  );
};

export default App;
