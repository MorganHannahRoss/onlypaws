import React, { useState, useEffect } from 'react'

interface SavingCounterProps {
  name: string
}

const SavingCounter = (props: SavingCounterProps) => {
  // Initialize count from local storage or start with 0
  const [count, setCount] = useState(() => {
    const initialValue = localStorage.getItem(props.name)
    return initialValue !== null ? parseInt(initialValue, 10) : 0
  })
  const [trolley, setTrolley] = useState(() => {
    const initialTrolley = localStorage.getItem('trolleyList')
    return initialTrolley
  })
  console.log(props.name)
  // Update local storage when count changes
  useEffect(() => {
    localStorage.setItem(props.name, count)
    localStorage.setItem('trolleyList', trolley)
  }, [count])

  // Function to increment the count
  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1)
    setTrolley([...trolley, props.name])
  }
  console.log(trolley)
  return (
    <button onClick={incrementCount}>
      Clicked {count} {count === 1 ? 'time' : 'times'}
    </button>
  )
}

export default SavingCounter
