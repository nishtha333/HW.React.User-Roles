import React from 'react'
import UserRow from './UserRow'

const UserList = function({users}) {
    return (
        <div id="users">
            {users.map(user => <UserRow key={user.id} user={user} />)}
        </div>
    )
}

export default UserList