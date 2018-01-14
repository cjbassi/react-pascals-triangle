import * as React from 'react'

interface Props {
  value: number
  handleSubmit: Function
}

interface State {
  value: number
}

class Form extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      value: this.props.value,
    }
  }

  handleChange = (event: any) => {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit = (event: any) => {
    event.preventDefault()
    this.props.handleSubmit(this.state.value)
  }

  render() {
    const { value } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <label>{'Rows: '}
          <input
            type="number"
            value={value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Form
