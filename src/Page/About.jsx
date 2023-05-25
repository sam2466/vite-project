import React from 'react'
import MembersTable from '../Components/MembersTable'
import membersAPI from '../Data/Restful/membersAPI';
import { socket } from '../../network/websocket';

function About() {
  const { data: members, mutate, error, isLoading} = membersAPI.useMembers();
  if(error) return <div className="text-center">Fetching Data Error</div>
  if(isLoading) return <div className="text-center">Data not exist</div>

  const mutateAndEmit = (msg) => {
    mutate(undefined);
    if(msg) socket.emit('cud-member', msg);
  }
  const toggleStatus = async(id) => {
    await membersAPI.switchStatus(id);
    mutateAndEmit({from: 'toggleStatus of About', id: id});
  }

  const remove = async(id) => {
    await membersAPI.deleteOne(id);
    mutateAndEmit({from: 'remove of About', id: id});
  }

  const edit = async(theMember) => {
    await membersAPI.updateOne(theMember);
    mutateAndEmit({from: 'edit of About', data: theMember});
  }

  return (
    <div className="text-center">
        <h1>Users</h1>
        <MembersTable member = {members} 
          actions={{
            toggleStatus: toggleStatus,
            delete: remove,
            edit: edit,
          }}
        />
    </div>
  )
}

export default About