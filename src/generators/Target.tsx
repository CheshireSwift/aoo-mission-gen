import * as React from 'react'
import TableResult from '../TableResult'
import Ally from './Ally'

export const Target = () => (
  <TableResult title="Target" die="d8">
    {{
      1: 'Ex-Oblivion agent',
      2: 'High level enemy agent',
      3: 'Political figure',
      4: 'Scientist',
      5: 'Military figure',
      6: 'Corporate leader',
      7: <Ally corrupted="Corrupted " />,
      8: 'Creature',
    }}
  </TableResult>
)

export default Target
