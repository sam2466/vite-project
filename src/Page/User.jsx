import React, { useState } from 'react';
import Usershow from '../Components/Usershow';

function User() {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  
  return (
    <div>
        <h1>User</h1>
        <div className="container">
          <ul className="list-group list-group-horizontal">
            <li className="list-group-item">id</li>
            <li className="list-group-item">name</li>
            <li className="list-group-item">Email</li>
            <li className="list-group-item">status</li>
          </ul>
          <ul className="list-group list-group-horizontal mx-auto">
            <li className="list-group-item">
              <input className="form-control" type="nmber"></input>
            </li>
            <li className="list-group-item">
              <input className="form-control" type="text"></input>
            </li>
            <li className="list-group-item">
              <input className="form-control" type="text"></input>
            </li>
            <li className="list-group-item">
              <input className="form-check-input" type="checkbox" onCheck = {(event) =>{
                setStatus = (event.checked);
              }} ></input>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default User