import React, { useState, useEffect } from "react";

function EffectHook(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.querySelector("#text").innerHTML = `Clicked ${count} times`;
  });
  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        click {count} times
      </button>
      <p id="text"></p>
    </div>
  );
}

export default EffectHook;
