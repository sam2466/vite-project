import React, { useState } from 'react'


function MembersTableRow(props) {
    const member = props.member;
    const actions = props.actions;
    const [name, setName] = useState(member.name);
    const [email, setEmail] = useState(member.email);
  return (
    <tr className='mx-auto'>
        <td scope="col">{member.id}</td>
        <td scope="col">
          <input
            type='text'
            name='name'
            className='form-control mx-auto border-0'
            value={name}
            onChange={(e) => {
              e.stopPropagation();
              setName(e.target.value);
            }}
          />
        </td>
        <td scope="col">
          <input
            type='text'
            name='email'
            className='form-control mx-auto border-0'
            value={email}
            onChange={(e) => {
              e.stopPropagation();
              setEmail(e.target.value);
            }}
          />
        </td>
        <td scope="col">{
          member.status == 'active' ? (
            <i className="bi bi-brightness-high-fill bi-lg"></i>
          ) : (
            <i className="bi bi-moon bi-lg"></i>
          )
        }
        { member.status == 'active' ? (
            <button className="btn btn-success mx-2" 
              onClick = {(e) => {
                e.stopPropagation();
                actions.toggleStatus(member.id);
              }}>
              <i className="bi bi-lightbulb-fill"></i>
            </button>
          ) : (
            <button className="btn btn-outline-success mx-2" 
              onClick = {(e) => {
                e.stopPropagation();
                actions.toggleStatus(member.id);
              }}>
              <i className="bi bi-lightbulb"></i>
            </button>
          )}
        </td>
        <td scope="col">
          <button className="btn btn-primary mx-2"
            onClick = {(e) => {
              e.stopPropagation();
              actions.delete(member.id);
            }}
          >
            <i className="bi bi-person-fill-x"></i>
          </button>
          <button className="btn btn-secondary mx-2"
            onClick={(e) => {
              e.stopPropagation();
              actions.edit({id:member.id, name, email});
            }}
          >
            <i className="bi bi-pencil-square"></i>
          </button>
        </td>
    </tr>
  )
}

export default MembersTableRow