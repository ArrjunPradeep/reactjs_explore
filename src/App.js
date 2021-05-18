import {useState} from 'react'
import './App.css'
import Counter from './components/Counter';

function App() {

  const [state,setState] = useState(false)

  return (
    <div className="App">
      <h1 onClick={()=>setState(!state)}>Show/Hide</h1>
      {
        state && <Counter/>
      }
    </div>
  );
}

export default App;
