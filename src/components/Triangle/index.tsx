import * as React from 'react'
import * as _ from 'lodash'

import CSS from './CSS'
import TriangleRow from '../TriangleRow'

interface Props {
  rows: number
}

const Triangle = (props: Props) => {
  const { rows } = props
  return (
    <CSS>
      {_.range(rows).map((i) => <TriangleRow key={i + 1} row={i + 1} />)}
    </CSS>
  )
}

export default Triangle
