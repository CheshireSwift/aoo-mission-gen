import * as React from 'react'

export const TableLookup: React.FunctionComponent<{
  children: Record<number, React.ReactNode>
  value: number
}> = ({ children, value }) => <>{children[value]}</>

export default TableLookup
