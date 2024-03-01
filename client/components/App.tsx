import { useEffect, useState } from 'react'
import catsData from '../Data/cats.json'

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
        {/* <img
          class="logo"
          alt="cat logo"
          src="/logo.png"
        /> */}
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
              <h2>{cat.name}</h2>
              <p>{cat.species}</p>
              <p>{cat.personality}</p>
              <p>{cat.age}</p>
              <button>Adopt Now</button>
            </div>
          </section>
        ))}
      </>
    </div>
  )
}

export default App
