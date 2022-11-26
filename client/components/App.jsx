import React, { useState } from "react";

function App() {

  const [inCall, setInCall] = useState(false);

  return (
    <div className="App">
      {inCall ? "We are in the call!" : "Waiting to join call!"}
    </div>
  );
}

export default App;