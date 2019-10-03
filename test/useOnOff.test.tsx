import { fireEvent, render, waitForElement } from '@testing-library/react'
import * as React from 'react'

import { App } from '../example/App'

test('On/Off/Toggle', async () => {
  const { getByText } = render(<App />)

  // Navigate to hook's page
  const navLink = getByText('useOnOff')
  fireEvent.click(navLink)

  const onBtn = await waitForElement(() => getByText('Set On'))
  const offBtn = getByText('Set Off')
  const toggleBtn = getByText('Toggle')

  // check starts as false
  getByText('is on: false')

  // Sets to on and stays on
  fireEvent.click(onBtn)
  getByText('is on: true')
  fireEvent.click(onBtn)
  getByText('is on: true')
  fireEvent.click(onBtn)
  getByText('is on: true')

  // Sets to off and stays off
  fireEvent.click(offBtn)
  getByText('is on: false')
  fireEvent.click(offBtn)
  getByText('is on: false')
  fireEvent.click(offBtn)
  getByText('is on: false')

  // Toggles between on and off
  fireEvent.click(toggleBtn)
  getByText('is on: true')
  fireEvent.click(toggleBtn)
  getByText('is on: false')
  fireEvent.click(toggleBtn)
  getByText('is on: true')
})
