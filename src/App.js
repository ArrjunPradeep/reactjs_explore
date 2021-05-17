import {useState} from 'react'
import './App.css'
import Counter from './components/Counter';

function App() {

  const [count, setCount] = useState(0);

  const addCount = async() => {
    setCount(count+1);
    console.log("COUNT::",count);
  }

  let obj = {
    title:"1st counter",
    count
  }

  return (
    <div className="App">
      <button onClick={addCount}>ADD</button>
      <Counter {...obj} />
      <Counter title='2nd Counter' count={count}/>
    </div>
  );
}

export default App;
