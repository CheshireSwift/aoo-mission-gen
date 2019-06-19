import * as React from 'react'
import TableResult from '../TableResult'
import ExistingAgency from './ExistingAgency'
import NewAgency from './NewAgency'
import spreadResult from './helpers/spreadResult'

export const Agency = () => (
  <TableResult title="Agency" die="d6">
    {spreadResult([[1, <ExistingAgency />], [6, <NewAgency />]])}
  </TableResult>
)

export default Agency
