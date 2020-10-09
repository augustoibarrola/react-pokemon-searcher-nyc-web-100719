import React, {useState, useEffect} from 'react'
import { Form } from 'semantic-ui-react'

function PokemonForm(props){
  const [name, setName] = useState('')
  const [hp, sethp] = useState('')
  const [frontUrl, setFrontUrl] = useState('')
  const [backUrl, setBackUrl] = useState('')

  const changeHandler = (e) => {
    console.log(e.target.name)
    switch(e.target.name){
      case "name":
        setName(e.target.value)
        break;
      case "hp":
        sethp(e.target.value)
        break;
      case "frontUrl":
        setFrontUrl(e.target.value)
        break;
      case "backUrl":
        setBackUrl(e.target.value)
        break;
    }
  }
  
 

    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={props.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={changeHandler} value={name} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={changeHandler} value={hp} />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={changeHandler} value={frontUrl}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={changeHandler} value={backUrl} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
}

export default PokemonForm
