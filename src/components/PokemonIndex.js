import React, {useState, useEffect} from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

function PokemonIndex() {
  const [pokemon, setPokemon] = useState('')
  const [search, setSearch] = useState('')
  const [filteredPokemon, setFilteredPokemon] = useState('')

  useEffect(() => {
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(pokemon => {setPokemon(pokemon), setFilteredPokemon(pokemon)})
  }, [])

  const searchPoke = (e) =>{
    setSearch(e.target.value)
  }

  useEffect(() => {
    filterPokemon()
  }, [search])

  const filterPokemon =()=> {
    if(pokemon){
      let filteredArray = []
      pokemon.map(poke => {
        if(poke.name.includes(search)){
          filteredArray.push(poke)
        }
      })
      setFilteredPokemon(filteredArray)
    }
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    fetch('http://localhost:3000/pokemon', {
      method: "post",
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        "name": e.target.name.value,
        "sprites": {
          "front": e.target.frontUrl.value,
          "back": e.target.backUrl.value
        }, 
        "stats": [{
          "value": e.target.hp.value,
          "name": "hp"
        }]
       })
    })
    .then(resp => resp.json())
    .then(poke => {setPokemon([...pokemon, poke]), setFilteredPokemon([...filteredPokemon, poke])})
  }

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleSubmit={handleSubmit} />
        <br />
        <Search onChange={searchPoke} />
        <br />
        <PokemonCollection pokemon={filteredPokemon} />
      </Container>
    )
  }

export default PokemonIndex
