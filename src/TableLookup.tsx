import * as React from 'react'
import { css } from 'emotion'

export const TableLookup: React.FunctionComponent<{
  children: Record<number, React.ReactNode>
  value: number
}> = ({ children, value }) => {
  const selected = children[value]
  return typeof selected === 'string' ? (
    <div className={css({ padding: '0.25rem' })}>{selected}</div>
  ) : (
    <>{selected}</>
  )
}

export default TableLookup
