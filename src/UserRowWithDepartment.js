import React from 'react'

const UserRowWithDepartment = function({user}) {
    const {name, department} = user;
    const dept = department ? department.name : ''

    return (
        <li>{name}  {dept}</li>
    )
}

export default UserRowWithDepartment