import * as React from 'react'
import Ally from '../Ally'
import Complication from '../Complication'
import Enemy from '../Enemy'
import TypeTitle from '../helpers/TypeTitle'
import Location from '../Location'
import PlotType from '../PlotType'
import Target from '../Target'

export const Assassination = () => (
  <>
    <TypeTitle title="Assassination" />
    <Target />
    <Location />
    <PlotType />
    <Complication />
    <Ally />
    <Enemy />
  </>
)

export default Assassination
