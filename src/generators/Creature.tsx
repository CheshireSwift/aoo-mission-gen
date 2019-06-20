import * as React from 'react'
import TableResult from '../TableResult'
import spreadResult from './helpers/spreadResult'
import NonHuman from './NonHuman'
import TaintedHuman from './TaintedHuman'

export const Creature = () => (
  <TableResult title="Creature" die="d6">
    {spreadResult([[1, <TaintedHuman />], [4, <NonHuman />]])}
  </TableResult>
)

export default Creature
