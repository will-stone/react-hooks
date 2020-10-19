import { RefObject, useEffect, useRef } from 'react'

/**
 * Provides a hook to detect when a user clicks outside a component.
 * @param callback - the function to call when user clicks outside of the referenced component.
 * @returns a ref to be applied to the target element.
 */
export function useClickedOutside<Element extends HTMLElement>(
  callback: (event: Event) => void,
): RefObject<Element> {
  // Set-up the reference that'll be used to refer to the component.
  // eslint-disable-next-line unicorn/no-null -- null must be used here as a ref can only be Element | null
  const reference = useRef<Element>(null)

  useEffect(() => {
    const handleClick: EventListener = (event) => {
      // Not clicked on this component nor its children.
      if (
        !reference.current ||
        !reference.current.contains(event.target as Node)
      ) {
        callback(event)
      }
    }

    // Create event listener when mounting the component.
    document.addEventListener('click', handleClick, true)
    return () => {
      // Destroy event listener when unmounting the component.
      document.removeEventListener('click', handleClick, true)
    }
  }, [callback])

  return reference
}
