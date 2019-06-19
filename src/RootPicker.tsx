import * as React from 'react'
import { css } from 'emotion'
import Agency from './generators/Agency'
import Ally from './generators/Ally'
import Assassination from './generators/Assassination'
import Complication from './generators/Complication'
import Enemy from './generators/Enemy'
import ExistingAgency from './generators/ExistingAgency'
import Factors from './generators/Factors'
import Global from './generators/Global'
import Goal from './generators/Goal'
import Location from './generators/Location'
import NewAgency from './generators/NewAgency'
import Object from './generators/Object'
import PlotType from './generators/PlotType'
import Proximity from './generators/Proximity'
import Purpose from './generators/Purpose'
import Target from './generators/Target'
import MissionType from './generators/MissionType'

const generatorMap: Record<string, React.FunctionComponent> = {
  Agency,
  Ally,
  Assassination,
  Complication,
  Enemy,
  ExistingAgency,
  Factors,
  Global,
  Goal,
  Location,
  MissionType,
  NewAgency,
  Object,
  PlotType,
  Proximity,
  Purpose,
  Target,
}

export const RootPicker = ({ component }: { component: string }) => {
  const componentClass = generatorMap[component]
  return componentClass
    ? React.createElement(componentClass)
    : 'Generator not found'
}

export default RootPicker
