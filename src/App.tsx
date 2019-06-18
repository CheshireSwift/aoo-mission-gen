import * as React from 'react'
import TableResult from './TableResult'
import { css } from 'emotion'

export const App = () => (
  <div>
    <TableResult title="Mission Type" die="d8">
      {{
        1: 'Assassination',
        2: 'Infiltration',
        3: 'Investigation',
        4: 'Paramilitary Strike',
        5: 'Protection',
        6: 'Search and Rescue',
        7: 'Snatch and Grab',
        8: 'Transportation',
      }}
    </TableResult>
  </div>
)
export default App
