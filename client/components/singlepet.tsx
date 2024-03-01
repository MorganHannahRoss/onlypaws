import React from 'react'

interface SinglePetProps {
  name: string
  age: number
  species: string
  personality: string
  photo: string
}

const SinglePet: React.FC<SinglePetProps> = ({
  name,
  age,
  species,
  personality,
  photo,
}) => {
  return (
    <div className="container">
      <img src={`/client/img/${photo}`} alt={name} />
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Species: {species}</p>
      <p>Personality: {personality}</p>
    </div>
  )
}

export default SinglePet
