import React from 'react'
import UserRowWithDepartment from './UserRowWithDepartment'

const UserListWithDepartment = function({usersWithDepts}) {

    return (
        <div id="usersWithDepts" >
            {usersWithDepts.map(user => <UserRowWithDepartment key={user.id} user={user} /> )}
        </div>
    )
}

export default UserListWithDepartment