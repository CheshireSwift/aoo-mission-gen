import * as React from 'react'
import TableResult from '../TableResult'

export const Global = () => (
  <TableResult title="Global" die="d12">
    {{
      1: 'North America (Canada, U.S., Mexico)',
      2: 'Central America or the Caribbean',
      3: 'South America',
      4: 'Western Europe',
      5: 'Southern Europe',
      6: 'Eastern Europe',
      7: 'Middle East',
      8: 'North Africa',
      9: 'Africa',
      10: 'Asia (China, eastern Russia, Mongolia, N./S. Korea, Japan)',
      11: 'Southern Asia (India, Pakistan, Sri Lanka)',
      12: 'Australia/Pacific Islands',
    }}
  </TableResult>
)

export default Global
