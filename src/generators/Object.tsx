import * as React from 'react'
import TableResult from '../TableResult'

export const Object = () => (
  <TableResult title="Object" die="d8">
    {{
      1: 'Small piece of high technology',
      2: 'Alien device',
      3: 'Magical artifact or talisman',
      4: 'Superior or magical weapon',
      5: 'Data disk',
      6: 'Hard drive',
      7: 'Enhancement material (drugs/cyber)',
      8: 'Dangerous container',
    }}
  </TableResult>
)

export default Object
