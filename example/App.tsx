import { Link, Router } from '@reach/router'
import * as React from 'react'

import { UseOnOff } from './pages/UseOnOff'

export const App: React.FC = () => {
  return (
    <div>
      <nav>
        <Link to="/use-on-off">useOnOff</Link>
      </nav>
      <Router>
        <UseOnOff path="/use-on-off" />
      </Router>
    </div>
  )
}
