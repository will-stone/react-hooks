import { RouteComponentProps } from '@reach/router'
import * as React from 'react'

import { useOnOff } from '../../src'

export const UseOnOff: React.FC<RouteComponentProps> = () => {
  const { isOn, setOff, setOn, toggle } = useOnOff()
  return (
    <div>
      <div>
        <button onClick={setOn} type="button">
          Set On
        </button>
        <button onClick={setOff} type="button">
          Set Off
        </button>
        <button onClick={toggle} type="button">
          Toggle
        </button>
      </div>
      <div>is on: {isOn ? 'true' : 'false'}</div>
    </div>
  )
}
