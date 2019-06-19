import { css } from 'emotion'
import * as React from 'react'
import RootPicker from './RootPicker'

export const App = () => (
  <div
    className={css({
      button: { border: 'none', '&:hover': { background: 'skyblue' } },
    })}
  >
    <RootPicker
      component={
        new URLSearchParams(window.location.search).get('generator') ||
        'MissionType'
      }
    />
  </div>
)
export default App
