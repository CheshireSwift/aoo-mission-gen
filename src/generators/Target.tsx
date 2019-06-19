import * as React from 'react'
import TableResult from '../TableResult'

export const Target = () => (
  <TableResult title="Target" die="d8">
    {{
      1: 'Ex-Oblivion agent',
      2: 'High level enemy agent',
      3: 'Political figure',
      4: 'Scientist',
      5: 'Military figure',
      6: 'Corporate leader',
      7: 'Corrupted ally (roll on Ally table)',
      8: 'Creature',
    }}
  </TableResult>
)

export default Target
