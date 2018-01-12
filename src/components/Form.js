import React from 'react'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.size,
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.handleSubmit(this.state.value)
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <label>{"Rows: "}
          <input
            type="number"
            value={this.state.value}
            onChange={(e) => this.handleChange(e)}
          />
      </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Form
