import * as React from 'react'
import Ally from '../Ally'
import Complication from '../Complication'
import Enemy from '../Enemy'
import ChildTables from '../helpers/ChildTables'
import TypeTitle from '../helpers/TypeTitle'
import Location from '../Location'
import Object from '../Object'
import PlotType from '../PlotType'
import Target from '../Target'

export const Transportation = () => (
  <>
    <TypeTitle title="Transportation" />
    <Target />
    <Object />
    <ChildTables>
      <Location />
      <Location />
    </ChildTables>
    <PlotType />
    <Complication />
    <Ally />
    <Enemy />
  </>
)

export default Transportation
