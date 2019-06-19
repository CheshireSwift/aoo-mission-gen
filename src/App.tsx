import { css } from 'emotion'
import * as React from 'react'
import RootPicker from './RootPicker'
import { Cascade } from './context'

export const App = () => {
  const [cascade, setCascade] = React.useState(false)
  return (
    <Cascade.Provider value={!!cascade}>
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
      <div
        className={css({
          position: 'absolute',
          top: '0.5rem',
          right: '0.5rem',
        })}
      >
        <label htmlFor="cascade">Cascade?</label>
        <input
          id="cascade"
          type="checkbox"
          checked={cascade}
          onChange={e => setCascade(e.target.checked)}
        />
      </div>
    </Cascade.Provider>
  )
}
export default App
