import * as React from 'react'
import * as _ from 'lodash'
import * as math from 'mathjs'

import CSS from './CSS'

interface Props {
  row: number
}

const TriangleRow = (props: Props) => {
  const { row } = props
  let pascalNums = _.range(row).map((i) => math.combinations(row - 1, i))
  return (
    <div>
      {_.range(row).map((i) => (
        <CSS key={i + 1}>
          {pascalNums[i]}
        </CSS>
      ))}
    </div>
  )
}

export default TriangleRow
