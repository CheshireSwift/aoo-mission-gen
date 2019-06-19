import * as React from 'react'
import TableResult from '../TableResult'
import spreadResult from './helpers/spreadResult'

export const Factor = ({ title }: { title: string }) => (
  <TableResult title={title} die="d8">
    {spreadResult([[1, 'None'], [2, 'Low'], [6, 'Moderate'], [8, 'High']])}
  </TableResult>
)

export default Factor
