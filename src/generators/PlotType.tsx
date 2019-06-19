import * as React from 'react'
import TableResult from '../TableResult'
import ChildTables from './helpers/ChildTables'

export const PlotType = () => (
  <TableResult title="PlotType" die="d20">
    {{
      1: 'Adventure',
      2: 'Ascension',
      3: 'Descension',
      4: 'Discovery',
      5: 'Escape',
      6: 'Forbidden Love',
      7: 'Love',
      8: 'Maturation',
      9: 'Metamorphosis',
      10: 'Mystery',
      11: 'Pursuit',
      12: 'Quest',
      13: 'Rescue',
      14: 'Revenge',
      15: 'Rivalry',
      16: 'Sacrifice',
      17: 'Temptation',
      18: 'Transformation',
      19: 'Wretched Excess',
      20: (
        <ChildTables>
          <PlotType />
          <PlotType />
        </ChildTables>
      ),
    }}
  </TableResult>
)

export default PlotType
