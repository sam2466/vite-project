import React from 'react'
import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
//import '../App.css';
import MyBtn from '../Components/myBtn';

function Home() {
  const myAry = [3, 10, 6, 25];
  const [homeCount, setHomeCount] = useState(0);
  const getDataFromChild = (data) => {
    setHomeCount(data);
  };
  return (
    <div className="text-center">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React: {homeCount}</h1>
      <div className="card">
        <MyBtn initCount={1} passToParent = {getDataFromChild} />
        <MyBtn initCount={2} passToParent = {getDataFromChild} />
        <MyBtn initCount={3} passToParent = {getDataFromChild} />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="mt-4">
        Click on the Vite and React logos to learn more
      </p>
      
      <ul className="list-group">
       {myAry.map((ele, idx) => (
          <li key={idx} className="list-group-item mx-auto">{ele}  </li>
       )) }
      </ul>
    </div>
  )
}

export default Home