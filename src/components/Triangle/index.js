import React from 'react'
import * as _ from 'lodash'
import * as math from 'mathjs'

import * as CSS from './CSS'

const TriangleRow = ({ row }) => {
  let pascalNums = _.range(row).map((i) => math.combinations(row-1, i))
  return (
    <div>
      {_.range(row).map((i) => (
        <CSS.TriangleCell key={i+1}>
          {pascalNums[i]}
        </CSS.TriangleCell>
      ))}
    </div>
  )
}

const Triangle = ({ size }) => (
  <CSS.Triangle>
    {_.range(size).map((i) => <TriangleRow key={i+1} row={i+1} />)}
  </CSS.Triangle>
)

export default Triangle
