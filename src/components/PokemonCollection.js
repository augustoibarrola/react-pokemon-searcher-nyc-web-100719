import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

function PokemonCollection(props){
  const renderCards=()=>{
    return props.pokemon.map(poke => {return <PokemonCard key={poke.id} poke={poke} />})
  } 
    return (
      <div>
        <h1>Hello From Pokemon Collection</h1>
        <Card.Group itemsPerRow={6}>
          {props.pokemon? renderCards() : null}
        </Card.Group>
      </div>
    )
}

export default PokemonCollection
