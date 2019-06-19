import * as React from 'react'
import Roll from 'roll'
import { css } from 'emotion'
import * as _ from 'lodash'

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
          background: 'lightgrey',
        })}
      >
        <div
          className={css({
            background: 'white',
            button: { height: '2rem', verticalAlign: 'middle' },
          })}
        >
          <button
            className={css({ width: '6rem' })}
            onClick={() => {
              setResult(roll.roll(die).result)
            }}
          >
            {result ? 'Re-roll' : 'Roll'}
          </button>
          <button
            onClick={() => {
              const newResult = parseInt(prompt('Roll result?'))
              newResult && setResult(newResult)
            }}
          >
            🔢
          </button>
          <span className={css({ marginLeft: '0.5rem', color: 'grey' })}>
            {title}: {result || '??'} ({die})
          </span>
        </div>
        {result && (
          <div
            className={css({
              background: 'white',
              marginLeft: '1rem',
              marginBottom: '0.5rem',
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
