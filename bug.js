```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic here. The return function should only cleanup the previous effect.
    let interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => clearInterval(interval); //This line will not fix the bug
    //The setInterval is still running in the background
    //The return function from useEffect should only cleanup the previous effect.
    //You might need a flag to stop the effect
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}

export default MyComponent;
```