import './App.css'
import Header from "./components/Header";

function App() {

  const data = "description manual"

  return (
    <div>
      <Header data={data}/>
      <p>This is the {data}</p>
    </div>
  );
}

export default App;
