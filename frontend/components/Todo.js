import React from 'react'

export default class Todo extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div onClick={() => this.props.toggle(this.props.item.id)}>
        <p>{this.props.item.name}{+this.props.item.completed ? " ☒" : " ☐"}</p>
      </div>
    )
  }
}
