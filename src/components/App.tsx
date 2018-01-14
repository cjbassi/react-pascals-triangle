import * as React from 'react'

import Form from './Form'
import Triangle from './Triangle'

interface State {
  rows: number
}

class App extends React.Component<any, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      rows: 5,
    }
  }

  handleSubmit = (val: number) => {
    this.setState({
      rows: val
    })
  }

  render() {
    const { rows } = this.state
    return (
      <div>
        <Form
          value={rows}
          handleSubmit={this.handleSubmit}
        />
        <Triangle
          rows={rows}
        />
      </div>
    )
  }
}

export default App
