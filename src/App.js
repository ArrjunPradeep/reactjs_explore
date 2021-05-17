import {useState} from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0);

  const addCount = async() => {
    setCount(count+1);
    console.log("COUNT::",count);
  }

  return (
    <div className="App">
      <button onClick={addCount}>ADD</button>
      <h1>Counter : {count}</h1>
    </div>
  );
}

export default App;
