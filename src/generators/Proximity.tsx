import * as React from 'react'
import TableResult from '../TableResult'
import Global from './Global'
import spreadResult from './helpers/spreadResult'

export const Proximity = () => (
  <TableResult title="Proximity" die="d10">
    {spreadResult<React.ReactNode>([
      [1, 'Local'],
      [3, 'Regional'],
      [6, <Global />],
    ])}
  </TableResult>
)

export default Proximity
