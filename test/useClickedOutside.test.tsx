import { fireEvent, render, waitForElement } from '@testing-library/react'
import * as React from 'react'

import { App } from '../example/App'

test('useClickedOutside', async () => {
  const { getByText, queryByText } = render(<App />)

  // Navigate to hook's page
  const navLink = getByText('useClickedOutside')
  fireEvent.click(navLink)

  // Wait for page change
  const toggleBtn = await waitForElement(() => getByText('Toggle'))
  const toggleTxt = 'Click outside this element to hide this text.'

  // Hidden
  expect(queryByText(toggleTxt)).toBeFalsy()

  // Show
  fireEvent.click(toggleBtn)
  getByText(toggleTxt)

  // Hide
  fireEvent.click(toggleBtn)
  expect(queryByText(toggleTxt)).toBeFalsy()

  // Show
  fireEvent.click(toggleBtn)
  getByText(toggleTxt)

  // Hide (by clicking outside element)
  const outsideTxt = getByText('I am outside the box.')
  fireEvent.click(outsideTxt)
  expect(queryByText(toggleTxt)).toBeFalsy()
})
