import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

// function App() {
  
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }
// function App2(){
//   return(
//     <>
//     <h1>Welcome</h1>
//     <p>written inside paragraph</p>
//     </>
//   )
// }



// const resume=()=>{
//   const profile={
//     name:"Ashvani Sharma",
//     email:"ashvani.sharma_cs22@gla.ac.in",
//     mobile:8077719863
//   };

//   return <div>
//     <h1>Hello, {profile.name}!</h1>
//     <p>{profile.email|| "no email provided"}</p>
//     <p>{profile.mobile}</p>
//   </div>
// }



// const ValueCount=()=>{

//   const [value, setValue]=useState(0);

//   const onClick=()=>{
//     setValue(value+1);
//     console.log(value);
//   };
//   const dec=()=>{
//     setValue(value-1);
//     console.log(value);
//   };
//   const reset=()=>{
//     setValue(0);
//     console.log(value);
//   };
  
//   return(
//     <div>
//     <h2>Value:{value}</h2>
//     <button onClick={onClick}>Click me</button>
//     <button onClick={dec}>Decrease</button>
//     <button onClick={reset}>Reset</button>
//     </div>
//   )
// }


export default ValueCount;