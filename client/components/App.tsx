import { Outlet } from 'react-router-dom'
import { React, useEffect, useState } from 'react'
// import '../main.css' // havent create yet ( CSS FILE NEEDED)
import '../Data'
import '../img'

interface Cat {
  name: string
  age: number
  species: string
  personality: string
  photo: string
}

// "name": "Oliver",
// "age": 5,
// "species": "Maine Coon",
// "personality": "Laid-back and friendly, enjoys lounging around in cozy spots.",
// "photo": "Maine-Coon.png"

const cat

function App() {
  return (
    <>
      <div className="container-of-single-cat-product">
        <img
          src="{/images/color_earth.gif}" // image calling function
          alt="alt code fuction call " // ALT TEXT LINK
        />
        <h2>{cat.name}</h2> {/* name of cat in H2 */}
        <h3>{cat.personality}</h3> {/* descrption of cat in H3 */}
      </div>
      {/* 
// will map this  */}

      {/* <div >
        <Nav />
NOTES FOR LATER 
        <Outlet />
      </div> */}
    </>
  )
}

export default App
