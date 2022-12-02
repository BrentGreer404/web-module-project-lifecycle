import React from 'react'

export default class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      inputValue: ""
    }
  }

  changeHandler = (e) => {
    this.setState({inputValue: e.target.value})
  }

  submit = (evt) => {
    evt.preventDefault()
    this.props.add(this.state.inputValue)
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.submit(e)}>
          <input onChange={this.changeHandler} value={this.state.inputValue} type="text"></input>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
