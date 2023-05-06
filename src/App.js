import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [list, setList] = useState([]); 
  const [toDo,settoDo] = useState("Want some Cool H-Whip?");
  useEffect(()=> {
    setList(["stewieWorldDominationShallBeMine","eat1Donut","pleaseLetsJustGoHome"]) 
  }, [])
  const deletetoDo = (val) => {setList(

  )};

  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <h2>Today, we will acheive...</h2>

      <ul>
        {list.map((val, id) => {return <li onClick = {
          () => {setList(
            list.filter((item) => {return item !== val})
          )}
        } key = {id}>{val}</li>}) }
      </ul>
      <input val = {toDo} onChange = {(e)=>{settoDo(e.target.value);}}/>
      <button onClick = {()=>{setList([...list, toDo])}}>Add to-do</button>
    </div>
  );
}

export default App;
