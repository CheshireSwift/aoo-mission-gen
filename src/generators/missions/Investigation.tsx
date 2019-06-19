import * as React from 'react'
import TypeTitle from '../helpers/TypeTitle'
import PlotType from '../PlotType'
import Complication from '../Complication'
import Goal from '../Goal'
import Ally from '../Ally'
import Enemy from '../Enemy'
import Location from '../Location'

export const Investigation = () => (
  <>
    <TypeTitle title="Investigation" />
    <Location />
    <PlotType />
    <Complication />
    <Goal />
    <Ally />
    <Enemy />
  </>
)

export default Investigation
