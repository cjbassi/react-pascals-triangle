import React from 'react'
import styled from 'styled-components'
import * as _ from 'lodash'
import * as math from 'mathjs'

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

const TriangleRow = ({ row }) => {
  let pascalNums = _.range(row).map((i) => math.combinations(row-1, i))
  return (
    <div>
      {_.range(row).map((i) => (
        <TriangleCellCSS key={i+1}>
          {pascalNums[i]}
        </TriangleCellCSS>
      ))}
    </div>
  )
}

const Triangle = ({ size }) => (
  <TriangleCSS>
    {_.range(size).map((i) => <TriangleRow key={i+1} row={i+1} />)}
  </TriangleCSS>
)

export default Triangle
