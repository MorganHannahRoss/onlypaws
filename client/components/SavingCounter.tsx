import React, { useState, useEffect } from 'react'

interface Props {
  trolley: string[]
  name: string
  setTrolley: (trolley: string[]) => void
}

const CounterButton = (props: Props) => {
  // Initialize count from local storage or start with 0
  const [count, setCount] = useState(() => {
    const initialValue = localStorage.getItem(props.name)
    return initialValue !== null ? parseInt(initialValue, 10) : 0
  })

  // Update local storage when count changes
  useEffect(() => {
    localStorage.setItem(props.name, count)
  }, [count])

  // Function to increment the count
  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1)
    props.setTrolley([...props.trolley, props.name])
  }

  return (
    <div>
      <button onClick={incrementCount}>
        {props.name} Clicked {count} {count === 1 ? 'time' : 'times'}
      </button>
    </div>
  )
}

export default CounterButton
