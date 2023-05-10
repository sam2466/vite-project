import React from 'react'


function MembersTableRow(props) {
    const member = props.member;
  return (
    <tr>
        <td scope="col">{member.id}</td>
        <td scope="col">{member.name}</td>
        <td scope="col">{member.email}</td>
        <td scope="col">{member.status}</td>
    </tr>
  )
}

export default MembersTableRow