import * as React from 'react'
import RollResult from '../RollResult'
import TableResult from '../TableResult'
import Ally from './Ally'
import ChildTables from './helpers/ChildTables'
import spreadResult from './helpers/spreadResult'
import NonHuman from './NonHuman'

export const Enemy = () => (
  <TableResult title="Enemy" die="d8">
    {spreadResult<React.ReactNode>([
      [1, 'Agent'],
      [3, 'Agent (Legendary)'],
      [5, <Ally corrupted="Tainted " title="Human" />],
      [
        6,
        <ChildTables>
          <Ally title="Mastermind" />
          <RollResult title="Mooks" die="d10">
            {(result) => `...with ${result} mooks.`}
          </RollResult>
        </ChildTables>
      ],
      [7, <Ally title="Mystic" />],
      [8, <NonHuman />]
    ])}
  </TableResult>
)

export default Enemy
