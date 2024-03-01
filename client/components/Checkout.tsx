import React, { useState } from 'react'
import catsData from '../Data/cats.json'
import EmptyCartButton from './EmptyCartButton.tsx'
interface Props {
  trolley: string[]
  setTrolley: (trolley: string[]) => void
}

function getImgFromName(name: string) {
  const cat = catsData.find((cat) => cat.name == name)
  return '/client/img/' + cat?.photo
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
  return (
    <div>
      <h1>Checkout</h1>
      <div className="checkout">
        <EmptyCartButton
          trolley={props.trolley}
          setTrolley={props.setTrolley}
        />

        {Object.keys(totals).map((item, index) => (
          <div className="checkout-item" key={index}>
            <img
              src={getImgFromName(item)}
              alt={item}
              className="checkout-img"
            />
            <div className="text-container">
              <p className="checkout-txt">{item}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Checkout
