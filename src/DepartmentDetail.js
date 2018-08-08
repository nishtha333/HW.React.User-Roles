import React from 'react'
import UserList from './UserList'

const DepartmentDetail = function({department}) {
    const {users} = department
    console.log(users)
    return (
        <div id="department">
            <p>{department.name}</p>
            
            {<UserList users={users} />}

        </div>

    )
}

export default DepartmentDetail