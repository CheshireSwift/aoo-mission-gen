import * as React from 'react'
import TableResult from '../TableResult'
import Assassination from './missions/Assassination'
import Infiltration from './missions/Infiltration'
import Investigation from './missions/Investigation'
import ParamilitaryStrike from './missions/ParamilitaryStrike'
import Protection from './missions/Protection'
import SearchAndRescue from './missions/SearchAndRescue'
import SnatchAndGrab from './missions/SnatchAndGrab'
import Transportation from './missions/Transportation'

export const MissionType = () => (
  <TableResult title="Mission Type" die="d8">
    {{
      1: <Assassination />,
      2: <Infiltration />,
      3: <Investigation />,
      4: <ParamilitaryStrike />,
      5: <Protection />,
      6: <SearchAndRescue />,
      7: <SnatchAndGrab />,
      8: <Transportation />,
    }}
  </TableResult>
)

export default MissionType
