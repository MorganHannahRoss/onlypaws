import React, { useState } from 'react'

function Checkout() {
  const [trolleyList, setTrolleyList] = useState(() => {
    const initialList = localStorage.getItem('trolleyList')
    return initialList
  })
  console.log(trolleyList)
  return (
    <div>
      <h1>Checkout</h1>
      <ul>
        {trolleyList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default Checkout
