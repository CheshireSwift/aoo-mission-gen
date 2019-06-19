import * as React from 'react'
import TableResult from '../TableResult'
import ChildTables from './helpers/ChildTables'
import Proximity from './Proximity'

export const Location = () => (
  <ChildTables>
    <Proximity />
    <TableResult title="Location" die="d10">
      {{
        1: 'Agency/Organization Headquarters',
        2: 'Castle/Mansion/Apartment',
        3: 'Temple/Church/Mosque',
        4: 'Urban Center',
        5: 'Wilderness',
        6: 'Exotic (up to other dimensional)',
        7: 'Important Building/Landmark',
        8: 'Yacht/Airplane/Train',
        9: 'Library/Research center',
        10: 'Corporate Office',
      }}
    </TableResult>
  </ChildTables>
)

export default Location
