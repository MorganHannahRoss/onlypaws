import React, { useState } from 'react'

interface Props {
  trolley: string[]
}

function Checkout(props: Props) {
  const totals = props.trolley.reduce((acc, item) => {
    if (acc[item]) {
      acc[item]++
    } else {
      acc[item] = 1
    }
    return acc
  }, {})
  console.log(totals)
  return (
    <div>
      <h1>Checkout</h1>
      <ul>
        {Object.keys(totals).map((item, index) => (
          <li key={index}>
            {item}: {totals[item]}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Checkout
