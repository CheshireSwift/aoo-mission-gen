import * as React from 'react'
import TableResult from '../TableResult'

export const Goal = () => (
  <TableResult title="Goal" die="d10">
    {{
      1: 'Anarchy',
      2: 'Control',
      3: 'Conquest',
      4: 'Greed',
      5: 'Revenge',
      6: 'Subversion',
      7: 'Terrorism',
      8: 'Entertainment',
      9: 'Destruction',
      10: 'Redemption',
    }}
  </TableResult>
)

export default Goal
