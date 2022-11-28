import React from 'react'
import axios from 'axios'
import TodoList from './TodoList'
import Form from './Form'

const URL = 'http://localhost:9000/api/todos'

const fetchList = () => {
  return axios
    .get(URL)
    .then(res => res)
    .catch(err => console.log(err))
}

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    console.log("did mount")
    fetchList()
      .then(res => 
      this.setState({items: res.data.data})
      )
    
  }
  render() {
    console.log(this.state.items)
    return (
      <div>
        <TodoList items={this.state.items}/>
        <Form/>
      </div>
    )
  }
}
