import React from 'react'
import DepartmentRow from './DepartmentRow'

const DepartmentList = function({departments, setDepartment}) {

    return (
        <div id="departments">
            {departments.map( dept => <DepartmentRow key={dept.id} department={dept} setDepartment={setDepartment}/>)}
        </div>
    )
}

export default DepartmentList