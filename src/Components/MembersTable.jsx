import React, { useState } from 'react'
import MembersTableRow from './MembersTableRow'

function MembersTable(props) {
    const members = props.member;
    const actions = props.actions;
  return (
    <div>
        <table className="table table-success table-striped table-hover table-responsive">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col" style = {{ width: "100 px" }}>
                        Name
                    </th>
                    <th scope="col" style = {{ width: "200 px" }}>
                        Email
                    </th>
                    <th scope="col" style = {{ width: "100 px" }}>
                        Status
                    </th>
                    <th scope="col" style = {{ width: "100 px" }}>
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    members?.map((ele,idx) => (
                    <MembersTableRow key={ele.id} member={ele} actions={actions} />
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default MembersTable