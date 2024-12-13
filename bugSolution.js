```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  const stopCounter = () => {
    setIsRunning(false);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={stopCounter}>Stop Counter</button>
    </div>
  );
}

export default MyComponent;
```