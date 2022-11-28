import React from 'react'

export default class Todo extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
    <p>{this.props.name}</p>
  )
  }
}
