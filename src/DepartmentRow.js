import React from 'react'

const DepartmentRow = function({department, setDepartment}) {
    
    return (
        <li onClick={() => setDepartment(department.id)}>{department.name}  {department.users.length}</li>
    )
}

export default DepartmentRow