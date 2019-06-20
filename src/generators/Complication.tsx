import * as React from 'react';
import RollResult from '../RollResult';
import TableResult from '../TableResult';
import Agency from './Agency';
import Ally from './Ally';
import Enemy from './Enemy';

export const Complication = () => (
  <TableResult title='Complications' die='d20'>
    {{
      1: 'Creature/Entity',
      2: <Ally title='Person' />,
      3: 'Betrayal',
      4: 'Trap/Ambush',
      5: 'Rescue Supporting Cast',
      6: 'Chase',
      7: 'Natural Hazard',
      8: 'Shock/Revelation',
      9: 'Discovery',
      10: 'Anomaly',
      11: 'Hostile Environment',
      12: 'High Strangeness',
      13: <Enemy />,
      14: (
        <RollResult title='Reinforcements' die='1d6'>
          {result => `Enemy Gains ${result} Reinforcements`}
        </RollResult>
      ),
      15: 'Escalation',
      16: 'Love Interest',
      17: 'It’s Personal',
      18: <Agency title='Another agency involved' />,
      19: 'Haunting',
      20: 'Innocents Endangered'
    }}
  </TableResult>
);

export default Complication;
