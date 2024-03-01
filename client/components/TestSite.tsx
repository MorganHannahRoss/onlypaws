import Checkout from './Checkout'
import SavingCounter from './SavingCounter'
import EmptyCartButton from './EmptyCartButton'
import { useState, useEffect } from 'react'
import catsData from '../Data/cats.json'

function TestSite() {
  const [trolley, setTrolley] = useState(() => {
    const savedTrolley = localStorage.getItem('trolley')
    if (savedTrolley) {
      return JSON.parse(savedTrolley)
    } else {
      return []
    }
  })

  const catNames = catsData.map((cat) => cat.name)

  useEffect(() => {
    localStorage.setItem('trolley', JSON.stringify(trolley))
  }, [trolley])
  console.log('hello')
  return (
    <div>
      <h1>App</h1>
      <p>React development has begun!</p>
      {catNames.map((cat, index) => (
        <SavingCounter
          name={cat}
          key={index}
          trolley={trolley}
          setTrolley={setTrolley}
        />
      ))}

      <Checkout trolley={trolley} setTrolley={setTrolley} />
      <EmptyCartButton trolley={trolley} setTrolley={setTrolley} />
    </div>
  )
}

export default TestSite
