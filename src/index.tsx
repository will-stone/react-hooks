import * as React from 'react'

export const useOnOff = (
  init = false,
): {
  isOn: boolean
  setOn(): void
  setOff(): void
  toggle(): void
} => {
  const [isOn, set] = React.useState<boolean>(init)

  const setOn = () => set(true)
  const setOff = () => set(false)
  const toggle = isOn ? setOff : setOn

  return {
    isOn,
    setOn,
    setOff,
    toggle,
  }
}
