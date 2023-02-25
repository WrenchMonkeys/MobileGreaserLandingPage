import React, {useState} from 'react';
import './App.css';

function Index() {
  const [count, setCount] = useState<number>(0);
  const handleIncrement = () => setCount(count => count + 1);

  return (
    <div className="App">
      <header className="App-header">
        Mobile Greaser
        <h2>count: {count}</h2>
        <button onClick={handleIncrement}>Increment</button>
      </header>
    </div>
  );
}

export default Index;
