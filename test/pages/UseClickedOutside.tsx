import { RouteComponentProps } from '@reach/router'
import * as React from 'react'

import { useClickedOutside } from '../../src'

export const UseClickedOutside: React.FC<RouteComponentProps> = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const hide = () => setIsOpen(false)
  const flip = React.useCallback(() => setIsOpen(!isOpen), [isOpen])
  const componentReference = useClickedOutside<HTMLDivElement>(hide)

  return (
    <div>
      <div>I am outside the box.</div>
      <div ref={componentReference}>
        <button onClick={flip} type="button">
          Toggle
        </button>
        {isOpen && <p>Click outside this element to hide this text.</p>}
      </div>
    </div>
  )
}
