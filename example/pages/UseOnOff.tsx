import { RouteComponentProps } from '@reach/router'
import * as React from 'react'

import { useOnOff } from '../../src/index'

export const UseOnOff: React.FC<RouteComponentProps> = () => {
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
