import React, { useState } from "react";

function StateHookThree(props) {
  const [username, setName] = useState({ firstname: "", lastname: "" });
  return (
    <div>
      <form>
        <input
          type="text"
          onChange={(e) => setName({ ...username, firstname: e.target.value })}
        ></input>
        <input
          type="text"
          onChange={(e) => setName({ ...username, lastname: e.target.value })}
        ></input>
        <h5>{username.firstname}</h5>
        <h5>{username.lastname}</h5>
      </form>
    </div>
  );
}

export default StateHookThree;
