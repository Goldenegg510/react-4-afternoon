import React, { Component } from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom'

export default class ClassList extends Component {
  constructor() {
    super()
    this.state = {
      students: []
    }
  }
componentDidMount(){
Axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`).then(res => {
  this.setState({
    students: res.data
  })
})
}
  render() {
    let mappedStudents = this.state.students.map((current, index) => (
      <Link key={index} to={`/student/${current.id}`}>
        <h3>{current.first_name} {current.last_name}</h3>
      </Link>
    ))
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {mappedStudents}
      </div>
    )
  }
}