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
        emp.map((obj)=>{
          return (
            <Employee name={obj.name} age={obj.age}/>
          )
        })
      }
    </div>
  );
}

export default App;
