import React from 'react'
import './App.css';
import Timetable from './table';

const App = (props)=> {
  const profiler={
    name:"Ashvani Sharma",
    year:"3"
  };

  return (
    <div>
      <h1>{profiler.name}</h1>
      <p>{profiler.year}</p>
    </div>
  );
}
 const Data = ()=>{
  const idea={
    id:"1321",
    id2:"213"
  };
  return(
    <div>
      <h1>{idea.id}</h1>
    </div>
  )
 }

function App2(){
  return(
    <div>
      app2
    </div>
    
  );
}

export { Data }
export { App2 };
export default App
