import React from 'react'
import axios from 'axios'
import DepartmentList from './DepartmentList'
import DepartmentDetail from './DepartmentDetail'

class Main extends React.Component {

    constructor() {
        super()
        this.state = {
            departments: [],
            department: {}
        }
        this.setDepartment = this.setDepartment.bind(this);
    }

    setDepartment(departmentId) {
        axios.get(`/api/departments/${departmentId}`)
             .then(response => {
                this.setState({
                    department: response.data
                })
             })    
    }

    componentDidMount() {
        axios.get('/api/departments')
             .then(response => {
                 this.setState({
                     departments: response.data
                 })
             })
    }

    render () {
        const {departments, department} = this.state;
        const {setDepartment} = this;

        return (
            <div id="container">
                <h1>Acme Users and Departments - React!</h1>
                {department.id ? <DepartmentDetail department={department}/>
                               : <DepartmentList departments={departments} setDepartment={setDepartment}/>
                }
            </div>
        )
    }
}


export default Main
