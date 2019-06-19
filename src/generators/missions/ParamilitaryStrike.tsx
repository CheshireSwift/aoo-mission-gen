import * as React from 'react'
import TypeTitle from '../helpers/TypeTitle'
import Agency from '../Agency'
import Enemy from '../Enemy'
import Target from '../Target'
import Object from '../Object'
import Complication from '../Complication'

export const ParamilitaryStrike = () => (
  <>
    <TypeTitle title="Paramilitary Strike" />
    <Agency />
    <Enemy />
    <Target />
    <Object />
    <Complication />
  </>
)

export default ParamilitaryStrike
