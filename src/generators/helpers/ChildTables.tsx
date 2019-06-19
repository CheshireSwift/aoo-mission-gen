import * as React from 'react'
import { css } from 'emotion'

export const ChildTables = ({
  children,
}: {
  children: React.ReactNodeArray
}) => (
  <div
    className={css({
      width: 'unset',
      display: 'flex',
      borderTop: '0.25rem solid lightgrey',
      '&>*': {
        marginRight: '2rem',
        borderLeft: '0.25rem solid lightgrey',
      },
    })}
  >
    {children.map((child: React.ReactNode & { key?: string }, i) => (
      <div key={child.key || i}>{child}</div>
    ))}
  </div>
)
export default ChildTables
