import * as React from 'react'
import TableResult from '../TableResult'
import spreadResult from './helpers/spreadResult'
import TaintedHuman from './TaintedHuman'

export const Ally: React.FunctionComponent<{
  title?: string
  corrupted?: false | 'Corrupted ' | 'Tainted '
  young?: boolean
}> = ({ title, corrupted, young }) => (
  <TableResult title={(corrupted || '') + (title || 'Ally')} die="d100">
    {spreadResult<React.ReactNode>([
      [1, 'Oblivion Agent'],
      [3, 'Antiquarian'],
      [5, 'Archaeologist'],
      [9, 'Artist'],
      [12, 'Athlete'],
      [15, 'Author'],
      [19, 'Clergy'],
      [23, 'Criminal'],
      [26, 'Dilettante'],
      [29, 'Doctor of Medicine'],
      [32, 'Drifter'],
      [35, 'Engineer'],
      [38, 'Entertainer'],
      [42, 'Farmer'],
      [45, 'Journalist'],
      [49, 'Lawyer'],
      [53, 'Military Officer'],
      [56, 'Missionary'],
      [60, 'Parapsychologist'],
      [63, 'Pilot'],
      [66, 'Police Detective'],
      [69, 'Policeman'],
      [72, 'Private Investigator'],
      [76, 'Professor/Scientist'],
      [79, 'Psychotherapist'],
      [83, 'Retired Agent'],
      [87, 'Soldier'],
      [91, 'Craftsman'],
      [
        95,
        <Ally
          title={(young ? '' : 'Young ') + (title || 'Ally')}
          young={true}
          corrupted={corrupted}
        />
      ],
      [
        99,
        <>
          <Ally
            title={title}
            corrupted={corrupted ? 'Tainted ' : 'Corrupted '}
            young={young}
          />
          {// Add the statblock if this is the roll that took us from corrupted to tainted.
          corrupted === 'Corrupted ' ? <TaintedHuman /> : null}
        </>
      ]
    ])}
  </TableResult>
)

export default Ally
