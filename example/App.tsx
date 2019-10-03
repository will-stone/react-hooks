import { Link, Router } from '@reach/router'
import * as React from 'react'

import { UseClickedOutside } from './pages/UseClickedOutside'
import { UseOnOff } from './pages/UseOnOff'

export const App: React.FC = () => {
  return (
    <div>
      <nav>
        <Link to="/use-on-off">useOnOff</Link>
        {' | '}
        <Link to="/use-clicked-outside">useClickedOutside</Link>
      </nav>
      <Router>
        <UseOnOff path="/use-on-off" />
        <UseClickedOutside path="/use-clicked-outside" />
      </Router>
    </div>
  )
}
