import * as React from 'react'
import Agency from '../Agency'
import Ally from '../Ally'
import Complication from '../Complication'
import Enemy from '../Enemy'
import Goal from '../Goal'
import TypeTitle from '../helpers/TypeTitle'
import Location from '../Location'
import PlotType from '../PlotType'
import Target from '../Target'

export const SearchAndRescue = () => (
  <>
    <TypeTitle title="Search And Rescue" />
    <Agency />
    <Target />
    <Location />
    <PlotType />
    <Goal />
    <Complication />
    <Ally />
    <Enemy />
  </>
)

export default SearchAndRescue
