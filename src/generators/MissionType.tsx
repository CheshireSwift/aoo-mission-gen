import * as React from 'react'
import TableResult from '../TableResult'
import Assassination from './Assassination'

export const MissionType = () => (
  <TableResult title="Mission Type" die="d8">
    {{
      1: <Assassination />,
      2: 'Infiltration',
      3: 'Investigation',
      4: 'Paramilitary Strike',
      5: 'Protection',
      6: 'Search and Rescue',
      7: 'Snatch and Grab',
      8: 'Transportation',
    }}
  </TableResult>
)

export default MissionType
