import * as React from 'react'
import TableResult from '../TableResult'
import Global from './Global'

export const Proximity = () => (
  <TableResult title="Proximity" die="d10">
    {{
      1: 'Local',
      2: 'Local',
      3: 'Regional',
      4: 'Regional',
      5: 'Regional',
      6: <Global />,
      7: <Global />,
      8: <Global />,
      9: <Global />,
      10: <Global />,
    }}
  </TableResult>
)

export default Proximity
