import * as React from 'react'
import Roll from 'roll'
import { css } from 'emotion'

const roll = new Roll()

export const RollResult = ({
  children,
  title,
  die,
}: {
  children: (result: number | null) => React.ReactNode
  title: string
  die: string
}) => {
  const [result, setResult] = React.useState<number>()
  return (
    <>
      <div
        className={css({
          width: '100%',
          background: 'grey',
        })}
      >
        <div className={css({ background: 'white' })}>
          <button
            className={css({ width: '6rem', marginRight: '0.5rem' })}
            onClick={() => {
              setResult(roll.roll(die).result)
            }}
          >
            {result ? 'Re-roll' : 'Roll'} ({die})
          </button>
          {title}: {result || '??'}
        </div>
        {result && (
          <div
            className={css({
              background: 'white',
              marginLeft: '1rem',
            })}
          >
            {children(result)}
          </div>
        )}
      </div>
    </>
  )
}
export default RollResult
