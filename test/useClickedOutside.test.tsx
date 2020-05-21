import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import * as React from 'react'

import { App } from './App'

test('useClickedOutside', async () => {
  render(<App />)

  // Navigate to hook's page
  const navLink = screen.getByText('useClickedOutside')
  fireEvent.click(navLink)

  // Wait for page change
  const toggleButton = await waitFor(() => screen.getByText('Toggle'))
  const toggleTxt = 'Click outside this element to hide this text.'

  // Hidden
  expect(screen.queryByText(toggleTxt)).toBeFalsy()

  // Show
  fireEvent.click(toggleButton)
  screen.getByText(toggleTxt)

  // Hide
  fireEvent.click(toggleButton)
  expect(screen.queryByText(toggleTxt)).toBeFalsy()

  // Show
  fireEvent.click(toggleButton)
  screen.getByText(toggleTxt)

  // Hide (by clicking outside element)
  const outsideTxt = screen.getByText('I am outside the box.')
  fireEvent.click(outsideTxt)
  expect(screen.queryByText(toggleTxt)).toBeFalsy()
})
