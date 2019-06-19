import * as React from 'react'
import TableResult from '../TableResult'
import ChildTables from './helpers/ChildTables'
import Factor from './Factor'
import Purpose from './Purpose'

export const NewAgency = () => (
  <>
    <ChildTables>
      <TableResult die="d20">
        {{
          1: 'The',
          2: 'National',
          3: 'Capitalist',
          4: 'Communist',
          5: 'Liberation',
          6: 'Allied',
          7: 'International',
          8: 'Covert',
          9: 'Joint',
          10: 'United',
          11: 'Executive',
          12: 'Global',
          13: 'World',
          14: 'Homeland',
          15: 'Motherland',
          16: 'Fatherland',
          17: 'Mystic',
          18: '(National Name)',
          19: 'Axis',
          20: 'Inter',
        }}
      </TableResult>
      <TableResult die="d20">
        {{
          1: 'Shadow',
          2: 'Entrepreneurs',
          3: 'Iron',
          4: 'Red',
          5: 'Tide',
          6: 'Action',
          7: 'Defense',
          8: 'Infiltration',
          9: 'Protection',
          10: 'Operations',
          11: 'Research',
          12: 'Surveillance',
          13: 'Strike',
          14: 'Counter-Terrorist',
          15: 'Investigation',
          16: 'Black',
          17: 'Terrorist',
          18: 'Security',
          19: 'Affairs',
          20: 'Defense',
        }}
      </TableResult>
      <TableResult die="d20">
        {{
          1: 'Operation',
          2: 'Brotherhood',
          3: 'Medium',
          4: 'Executives',
          5: 'Ministry',
          6: 'Directive',
          7: 'Division',
          8: 'Organization',
          9: 'Taskforce',
          10: 'Group',
          11: 'Cabal',
          12: 'Agency',
          13: 'Initiative',
          14: 'Bureau',
          15: 'Force',
          16: 'Council',
          17: 'Foundation',
          18: 'Consortium',
          19: 'Council',
          20: 'Institute',
        }}
      </TableResult>
    </ChildTables>
    <ChildTables>
      <Factor title="Alien" />
      <Factor title="Conspiracy" />
      <Factor title="Horror" />
      <Factor title="Occult" />
      <Factor title="Technology" />
      <Factor title="Influence" />
    </ChildTables>
    <Purpose />
  </>
)

export default NewAgency
