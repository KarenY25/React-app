//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css';
import Navbar from './components/navbar/navbar';
import Hero from './components/hero.jsx';
//import Card from "./components3/card.jsx"; 
import Astros from "./components/astros/Astros.jsx"
;
import { Routes, Route } from 'react-router-dom';




function App(){

  const links = [
    {
    id: 1,
    text: "home",
    link: "/"
  },
  {
    id: 2,
    text: "apod",
    link: "/apod",
  },
{
  id: 3,
  text: "astros",
  link: "/astros",
}
];

  return (
  <>
    <Navbar header="space-app" links={links}/>
    <Routes>
      <Route element={<Hero />} path="/" />
      <Route element={<Astros />} path="/astros" />
    </Routes>
    {/** <Hero />
      <Astros />*/}
    
    
  </>)
}


export default App;
/*Nav bar se queda fuera de los routes para que ese no se modifique */
/*
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/