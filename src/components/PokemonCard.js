import React, {useState} from 'react'
import { Card } from 'semantic-ui-react'

function PokemonCard(props){
  const [flipped, setFlipped] = useState(false)

  const flip = ()=> {
    setFlipped(!flipped)
  }
  let hpObj = props.poke.stats.find((stat) => {return stat.name === 'hp'})
  console.log(hpObj)
    return (
      <Card>
        <div>
          <div className="image">
            <img src={flipped? props.poke.sprites.back : props.poke.sprites.front}alt="oh no!" onClick={flip} />
          </div>
          <div className="content">
            <div className="header"> {props.poke.name} </div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hpObj.value} hp
            </span>
          </div>
        </div>
      </Card>
    )
}

export default PokemonCard
