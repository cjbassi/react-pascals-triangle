import React from 'react'
import ReactDOM from 'react-dom'

import styled from 'styled-components'

const TriangleCellCSS = styled.div`
    min-width: 30px;
    min-height: 20px;
    border: 1px solid black;
    display: inline-block;
    margin: 1px;
`

const TriangleCSS = styled.div`
    text-align: center;
`

class TriangleCell extends React.Component {
  render() {
    return (
      <TriangleCellCSS>
        {this.props.cell}
      </TriangleCellCSS>
    )
  }
}

class TriangleRow extends React.Component {
  render() {
    let pascal = pascalNums(this.props.row)
    let cells = []
    for (let i = 0; i < this.props.row; i++) {
      cells.push(<TriangleCell key={i+1} cell={pascal[i]} />)
    }
    return (
      <div>
        {cells}
      </div>
    )
  }
}

class Triangle extends React.Component {
  render() {
    let rows = []
    for (let i = 0; i < this.props.size; i++) {
      rows.push(<TriangleRow key={i+1} row={i+1} />)
    }
    return (
      <TriangleCSS>
        {rows}
      </TriangleCSS>
    )
  }
}

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

ReactDOM.render(
  <App />,
  document.getElementById("root")
)

function pascalNums(row) {
  let a = Array(row)
  for (let i = 0; i < row; i++) {
    a[i] = (combination(row-1, i))
  }
  return a

  function combination(n, k) {
    if (k === 0 || k === n) {
      return 1
    } else {
      return factorial(n) / (factorial(k) * factorial(n - k))
    }

    function factorial(a) {
      if (a < 1) {
        return 0
      } else if (a === 1) {
        return 1
      }
      return a * factorial(a - 1)
    }
  }
}
