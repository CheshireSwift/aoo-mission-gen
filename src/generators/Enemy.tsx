import * as React from 'react'
import TableResult from '../TableResult'
import spreadResult from './helpers/spreadResult'
import Ally from './Ally'

export const Enemy = () => (
  <TableResult title="Enemy" die="d8">
    {spreadResult<React.ReactNode>([
      [1, 'Agent'],
      [3, 'Agent (Legendary)'],
      [5, <Ally title="Tainted Human" />],
      [6, <Ally title="Mastermind" />],
      [7, <Ally title="Mystic" />],
      [8, 'Entity/Creature/Alien'],
    ])}
  </TableResult>
)

export default Enemy
