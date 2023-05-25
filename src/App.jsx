import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainMenu2 from './Components/MainMenu2';
import Home from './Page/Home';
import Product from './Page/Product';
import Todo from './Page/Todo';
import About from './Page/About';
import User from './Page/User';

import { socket } from '../network/websocket';
import membersAPI from './Data/Restful/membersAPI';


function App() {
  const { data: members, mutate, error, isLoading} = membersAPI.useMembers();
  useEffect(() => {
    socket.on('cud-member', (data) => {
      console.log('from socket.io server', socket.id, data);
      mutate(undefined);
    })
  },[]);
  return (
    <div className="container text-center">
      <Router>
        <MainMenu2/>
        <Routes>
          <Route path= "/vite-project/" element = {<Home/>} />
          <Route path= "/vite-project/about" element = {<About/>} />
          <Route path= "/vite-project/todo" element = {<Todo/>} />
          <Route path= "/vite-project/products" element = {<Product/>} />
          <Route path= "/vite-project/users" element = {<User/>} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
