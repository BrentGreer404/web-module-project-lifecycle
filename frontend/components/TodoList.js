import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        {this.props.items.map((td) => (
          <Todo key={td.id} item={td} toggle={(i) => this.props.toggle(i)}/>
        ))}
      </div>
    )
  }
}
