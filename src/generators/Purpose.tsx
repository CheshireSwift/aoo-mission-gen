import * as React from 'react'
import TableResult from '../TableResult'
import ChildTables from './helpers/ChildTables'

export const Purpose = () => (
  <TableResult title="Purpose" die="d20">
    {{
      1: 'Anarchy',
      2: 'Advising',
      3: 'Apprehension',
      4: 'Assassination',
      5: 'Collection',
      6: 'Combat',
      7: 'Control',
      8: 'Defend',
      9: 'Domination',
      10: 'Freedom',
      11: 'Investigation',
      12: 'Mercenary',
      13: 'Peace',
      14: 'Profit',
      15: 'Research',
      16: 'Security',
      17: 'Technology',
      18: 'Terrorism',
      19: 'Training',
      20: (
        <ChildTables>
          <Purpose />
          <Purpose />
        </ChildTables>
      ),
    }}
  </TableResult>
)

export default Purpose
