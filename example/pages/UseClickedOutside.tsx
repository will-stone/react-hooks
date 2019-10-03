import { RouteComponentProps } from '@reach/router'
import * as React from 'react'

import { useClickedOutside } from '../../src/index'

export const UseClickedOutside: React.FC<RouteComponentProps> = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const hide = () => setIsOpen(false)
  const flip = () => setIsOpen(!isOpen)
  const componentRef = useClickedOutside<HTMLDivElement>(hide)

  return (
    <div>
      <div>I am outside the box.</div>
      <div ref={componentRef}>
        <button onClick={flip}>Toggle</button>
        {isOpen && <p>Click outside this element to hide this text.</p>}
      </div>
    </div>
  )
}
