import * as React from 'react'
import TableResult from '../TableResult'
import ExistingAgency from './ExistingAgency'
import spreadResult from './helpers/spreadResult'
import NewAgency from './NewAgency'

export const Agency: React.FunctionComponent<{ title?: string }> = ({
  title
}) => (
  <TableResult title={title || 'Agency'} die="d6">
    {spreadResult([[1, <ExistingAgency />], [6, <NewAgency />]])}
  </TableResult>
)

export default Agency
