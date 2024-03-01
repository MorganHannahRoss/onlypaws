import { useEffect, useState } from 'react'
import catsData from '../Data/cats.json'
import logoOnlyPaws from './logo_only_paws.png'

interface Cat {
  name: string
  age: number
  species: string
  personality: string
  photo: string
}

function getImgFromName(name: string) {
  const cat = catsData.find((cat) => cat.name === name)
  return cat ? `/client/img/${cat.photo}` : '' // Adjusted path to match your setup
}

function getLogoSrc() {
  return logoOnlyPaws // Return the imported logo image path
}

function App() {
  const [cats, setCats] = useState<Cat[]>([])

  useEffect(() => {
    // Set the cats state with the data from catsData
    setCats(catsData)
  }, [])
  //code below

  return (
    <div className="body">
      <header>
        <img
          className="logo"
          alt="cat logo"
          src={getLogoSrc()} // Call the function to get the logo image path
        />
      </header>

      <>
        <div className="container" key="placeholder">
          {/* Iterate over each cat and display its information */}
          {cats.map((cat) => (
            <div key="testrt" className="product-card">
              <img
                src={getImgFromName(cat.name)}
                alt={cat.personality}
                width="100%"
              />
              <h2>Name: {cat.name}</h2>
              <p>Species: {cat.species}</p>
              <p>Temperment: {cat.personality}</p>
              <p>Age: {cat.age}</p>
              <button>Adopt Now</button>
            </div>
          ))}
        </div>
      </>
    </div>
  )
}

export default App
