import * as React from 'react'
import Ally from '../Ally'
import Complication from '../Complication'
import Enemy from '../Enemy'
import TypeTitle from '../helpers/TypeTitle'
import Location from '../Location'
import Object from '../Object'
import PlotType from '../PlotType'
import Target from '../Target'

export const SnatchAndGrab = () => (
  <>
    <TypeTitle title="Snatch And Grab" />
    <Target />
    <Object />
    <Location />
    <Complication />
    <PlotType />
    <Ally />
    <Enemy />
  </>
)

export default SnatchAndGrab
