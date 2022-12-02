import React from 'react'
import axios from 'axios'
import TodoList from './TodoList'
import Form from './Form'

const URL = 'http://localhost:9000/api/todos'




export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      items: []
    }
  }

  fetchList = () => {
    return axios
      .get(URL)
      .then(res => res)
      .catch(err => console.log(err))
  }
  
  patchList = (id) => {
    return axios
      .patch(URL+`/${id}`)
      .catch(err => console.log(err))
  }

  update = () => {
    this.fetchList()
      .then(res => 
      this.setState({...this.state, items: res.data.data})
      )
  }

  toggleComplete = (id) => {
      this.patchList(id)
      .then(res => 
      this.setState({...this.state, items: this.state.items.map((v) => {
        if (v.id === id){
          return (res.data.data)
        }
        return v
      })}))
  }

  addTodo = (name) => {
    axios.post(URL, {name})
    .then(res => this.setState({...this.state, items: [...this.state.items, res.data.data]}))
  }

  clearComplete = () => {
    this.setState({...this.state, items: this.state.items.filter(v => !v.completed)})
  }

  componentDidMount() {
    this.update()
  }

  render() {
    return (
      <div>
        <TodoList items={this.state.items} toggle={(id) => this.toggleComplete(id)}/>
        <Form add={(name) => this.addTodo(name)} clear={this.clearComplete}/>
      </div>
    )
  }
}
