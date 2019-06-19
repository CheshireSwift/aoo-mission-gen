import * as React from 'react'
import Agency from '../Agency'
import Ally from '../Ally'
import Complication from '../Complication'
import Goal from '../Goal'
import TypeTitle from '../helpers/TypeTitle'
import Location from '../Location'
import PlotType from '../PlotType'
import ChildTables from '../helpers/ChildTables'

export const Infiltration = () => (
  <>
    <TypeTitle title="Infiltration" />
    <Agency />
    <Location />
    <PlotType />
    <Goal />
    <ChildTables>
      <Complication />
      <Complication />
    </ChildTables>
    <Ally />
  </>
)

export default Infiltration
