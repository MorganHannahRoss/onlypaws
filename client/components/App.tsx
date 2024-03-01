import { useEffect, useState } from 'react'
import catsData from '../Data/cats.json'
import logoOnlyPaws from './logo_only_paws.png'
import Checkout from './Checkout'

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

  // Save the trolley to local storage
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
  // Function to add cat to trolley
  const addToTrolley = (cat: object) => {
    setTrolley([...trolley, cat.name])
  }

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
        {/* Iterate over each cat and display its information */}
        {cats.map((cat, index) => (
          <section className="container" key={index}>
            <div className="product-card">
              <img
                src={getImgFromName(cat.name)}
                alt={cat.personality}
                width="100%"
              />
              <h2>Name: {cat.name}</h2>
              <p>Species: {cat.species}</p>
              <p>Temperment: {cat.personality}</p>
              <p>Age: {cat.age}</p>
              <button onClick={() => addToTrolley(cat)}>Adopt Now</button>
            </div>
          </section>
        ))}

        {/* Display the trolley */}
        <Checkout trolley={trolley} setTrolley={setTrolley} />
      </>
    </div>
  )
}

export default App
