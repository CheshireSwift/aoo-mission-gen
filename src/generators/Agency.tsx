import * as React from 'react'
import TableResult from '../TableResult'
import ExistingAgency from './ExistingAgency'
import NewAgency from './NewAgency'

export const Agency = () => (
  <TableResult title="Agency" die="d6">
    {result => (result < 6 ? <ExistingAgency /> : <NewAgency />)}
  </TableResult>
)

export default Agency
