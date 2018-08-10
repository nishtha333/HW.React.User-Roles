import React from 'react'
import axios from 'axios'
import DepartmentList from './DepartmentList'
import DepartmentDetail from './DepartmentDetail'
import UserListWithDepartment from './UserListWithDepartment'

class Main extends React.Component {

    constructor() {
        super()
        this.state = {
            departments: [],
            department: {},
            usersWithDepts: []
        }
        this.setDepartment = this.setDepartment.bind(this);
        this.unselectDepartment = this.unselectDepartment.bind(this);
    }

    setDepartment(departmentId) {
        axios.get(`/api/departments/${departmentId}`)
             .then(response => {
                this.setState({
                    department: response.data
                })
             })    
    }

    unselectDepartment() {
        this.setState({
            department: {}
        })
    }

    componentDidMount() {
        axios.get('/api/departments')
             .then(response => {
                 this.setState({
                     departments: response.data
                 })
             })

        axios.get('/api/users')
             .then(response => {
                 this.setState({
                     usersWithDepts: response.data
                 })
             })
    }

    render () {
        const {departments, department, usersWithDepts} = this.state;
        const {setDepartment, unselectDepartment} = this;

        return (
            <div id="container">
                <h1>Acme Users and Departments - React!</h1>
                {department.id ? <DepartmentDetail department={department}/>
                               : <DepartmentList departments={departments} setDepartment={setDepartment}/>
                }

                <hr/> 
                <UserListWithDepartment usersWithDepts={usersWithDepts} />

                <hr />
                <a href='/' onClick={() => unselectDepartment()}>Back</a>

            </div>
        )
    }
}


export default Main
