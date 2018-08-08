import React from 'react'

const DepartmentRow = function({department, setDepartment}) {
    
    return (
        <li onClick={() => setDepartment(department.id)}>{department.name}</li>
    )
}

export default DepartmentRow