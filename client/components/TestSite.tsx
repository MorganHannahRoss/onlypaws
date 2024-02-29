import Checkout from './Checkout'
import SavingCounter from './SavingCounter'
import EmptyCart from './EmptyCart'
import { useState, useEffect } from 'react'

function TestSite() {
  const [trolley, setTrolley] = useState(() => {
    const savedTrolley = localStorage.getItem('trolley')
    if (savedTrolley) {
      return JSON.parse(savedTrolley)
    } else {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('trolley', JSON.stringify(trolley))
  }, [trolley])

  return (
    <div>
      <h1>App</h1>
      <p>React development has begun!</p>
      <SavingCounter
        name="button-1"
        trolley={trolley}
        setTrolley={setTrolley}
      />
      <SavingCounter
        name="button-2"
        trolley={trolley}
        setTrolley={setTrolley}
      />
      <Checkout trolley={trolley} />
      <EmptyCart trolley={trolley} setTrolley={setTrolley} />
    </div>
  )
}

export default TestSite
