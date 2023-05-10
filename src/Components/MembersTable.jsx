import React from 'react'
import MembersTableRow from './MembersTableRow'

function MembersTable(props) {
    const member = props.member;
  return (
    <div>
        <table className="table table-success table-striped table-hover table-responsive">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    member?.map((ele,idx) => (
                    <MembersTableRow key={ele.id} member={ele}/>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default MembersTable