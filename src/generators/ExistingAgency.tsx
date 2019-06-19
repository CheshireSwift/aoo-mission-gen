import * as React from 'react'
import TableResult from '../TableResult'
import spreadResult from './helpers/spreadResult'

export const ExistingAgency = () => (
  <TableResult title="Existing Agency" die="d100">
    {spreadResult([
      [1, 'Pandora'],
      [21, 'Eye of Ishu'],
      [24, 'The Muti'],
      [27, 'Spirit Masters'],
      [30, 'Lizard House'],
      [33, 'Wind and Night'],
      [36, 'Tong'],
      [39, 'Children of Inti'],
      [42, 'Salsipuedes'],
      [45, 'Chapsin'],
      [47, 'PLA, MSS, and the 2nd Intelligence Department'],
      [49, 'Two Mirrors'],
      [51, 'Five Buddhas'],
      [54, 'Lotus Circle'],
      [57, 'Key and the Cup'],
      [60, 'Midnight Society'],
      [63, 'Fenris'],
      [66, 'Hand of Rasputin'],
      [69, 'Vihar'],
      [72, 'Agrona'],
      [75, 'Astrum Arentum'],
      [78, 'Illuminati'],
      [79, 'Infinites'],
      [83, 'L’Heurtasse'],
      [86, 'Thule Society'],
      [89, 'Le Morte'],
      [92, 'Dragon Fly Society'],
      [96, 'Bilderberg Group'],
      [97, 'Central Intelligence Agency'],
      [98, 'al’Qaeda'],
      [99, 'Mossad'],
      [100, 'SVR'],
    ])}
  </TableResult>
)

export default ExistingAgency
