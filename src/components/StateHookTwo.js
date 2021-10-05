import React, { useState } from "react";

function StateHookTwo(props) {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  return (
    <div>
      <button onClick={() => setCount(initialCount)}>Reset {count}</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        increment {count}
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        decrement{count}
      </button>
    </div>
  );
}

export default StateHookTwo;
