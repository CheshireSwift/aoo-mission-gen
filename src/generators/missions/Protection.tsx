import * as React from 'react'
import Agency from '../Agency'
import Ally from '../Ally'
import Complication from '../Complication'
import Enemy from '../Enemy'
import ChildTables from '../helpers/ChildTables'
import TypeTitle from '../helpers/TypeTitle'
import Location from '../Location'
import PlotType from '../PlotType'
import Target from '../Target'

export const Protection = () => (
  <>
    <TypeTitle title="Protection" />
    <Target />
    <Agency />
    <ChildTables>
      <Location />
      <Location />
    </ChildTables>
    <PlotType />
    <ChildTables>
      <Complication />
      <Complication />
    </ChildTables>
    <Ally />
    <Enemy />
  </>
)

export default Protection
