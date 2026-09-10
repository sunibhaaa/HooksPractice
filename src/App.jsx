import React, { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `${count} new Messages!`
  });
  return (
    <div>
      <h3>{count} new Messages!</h3>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default App; 