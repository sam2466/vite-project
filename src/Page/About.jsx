import React from 'react'
import MembersTable from '../Components/MembersTable'
import membersAPI from '../Data/Restful/membersAPI';

function About() {
  const { members: members, mutate, error, isLoading} = membersAPI.useMembers();
  return (
    <div className="text-center">
        <h1>Users</h1>
        <MembersTable member = {members} />
    </div>
  )
}

export default About