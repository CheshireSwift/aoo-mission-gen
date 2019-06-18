import * as React from 'react'
import RollResult from './RollResult'
import TableLookup from './TableLookup'

export const TableResult = ({
  title,
  die,
  children,
}: {
  title: string
  die: string
  children: Record<number, React.ReactNode>
}) => (
  <RollResult title={title} die={die}>
    {result => <TableLookup value={result}>{children}</TableLookup>}
  </RollResult>
)
export default TableResult
