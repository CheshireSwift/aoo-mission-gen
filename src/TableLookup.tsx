import * as React from 'react'
import { css } from 'emotion'

type ResultRecord = Record<number, React.ReactNode>

export type ResultChildren =
  | ((result: number) => React.ReactNode)
  | ResultRecord

export const TableLookup: React.FunctionComponent<{
  children: ResultChildren
  value: number
}> = ({ children, value }) => {
  const selected =
    typeof children === 'function'
      ? children(value)
      : (children as ResultRecord)[value]

  return typeof selected === 'string' ? (
    <div className={css({ padding: '0.25rem' })}>{selected}</div>
  ) : (
    <>{selected}</>
  )
}

export default TableLookup
