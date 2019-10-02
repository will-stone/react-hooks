import 'react-app-polyfill/ie11'

import * as React from 'react'

import { useOnOff } from '../src/index'

export const App = () => {
  const { isOn, setOff, setOn, toggle } = useOnOff()
  return (
    <div>
      <div>
        <button onClick={setOn}>Set On</button>
        <button onClick={setOff}>Set Off</button>
        <button onClick={toggle}>Toggle</button>
      </div>
      <div>is on: {isOn ? 'true' : 'false'}</div>
    </div>
  )
}
