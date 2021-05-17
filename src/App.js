import {useState} from 'react'
import './App.css'
import Employee from './components/Employee';

function App() {

  const [count, setCount] = useState(0);

  const addCount = async() => {
    setCount(count+1);
    console.log("COUNT::",count);
  }

  let emp = [
    {
      name:"Arjun",
      age:21
    },
    {
      name:"Nikhil",
      age:22
    },
    {
      name:"John",
      age:23
    }
  ]

  return (
    <div className="App">
      <button onClick={addCount}>ADD</button>
      {
        emp.map((obj, index)=>
          (
            <Employee key={index} {...obj}/>
          )
      )
      }
    </div>
  );
}

export default App;
