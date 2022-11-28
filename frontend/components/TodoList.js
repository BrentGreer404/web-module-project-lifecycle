import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        {this.props.items.map((item) => (
          // <p>item</p>
          <Todo key={item.id} name={item.name}/>
        ))}
        
      </div>
    )
  }
}
