import React from 'react'

import Form from './Form'
import Triangle from './Triangle'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      size: 10,
    }
  }
  handleSubmit(val) {
    this.setState({size: val})
  }
  render() {
    return (
      <div>
        <Form
          size={this.state.size}
          handleSubmit={(e) => this.handleSubmit(e)}
        />
        <Triangle
          size={this.state.size}
        />
      </div>
    )
  }
}

export default App
