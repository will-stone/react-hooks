import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import * as React from 'react'

import { App } from './App'

test('useOnOff', async () => {
  render(<App />)

  // Navigate to hook's page
  const navLink = screen.getByText('useOnOff')
  fireEvent.click(navLink)

  // Wait for page change
  const onButton = await waitFor(() => screen.getByText('Set On'))
  const offButton = screen.getByText('Set Off')
  const toggleButton = screen.getByText('Toggle')

  // check starts as false
  expect(screen.getByText('is on: false')).toBeInTheDocument()

  // Sets to on and stays on
  fireEvent.click(onButton)
  expect(screen.getByText('is on: true')).toBeInTheDocument()
  fireEvent.click(onButton)
  expect(screen.getByText('is on: true')).toBeInTheDocument()
  fireEvent.click(onButton)
  expect(screen.getByText('is on: true')).toBeInTheDocument()

  // Sets to off and stays off
  fireEvent.click(offButton)
  expect(screen.getByText('is on: false')).toBeInTheDocument()
  fireEvent.click(offButton)
  expect(screen.getByText('is on: false')).toBeInTheDocument()
  fireEvent.click(offButton)
  expect(screen.getByText('is on: false')).toBeInTheDocument()

  // Toggles between on and off
  fireEvent.click(toggleButton)
  expect(screen.getByText('is on: true')).toBeInTheDocument()
  fireEvent.click(toggleButton)
  expect(screen.getByText('is on: false')).toBeInTheDocument()
  fireEvent.click(toggleButton)
  expect(screen.getByText('is on: true')).toBeInTheDocument()
})
