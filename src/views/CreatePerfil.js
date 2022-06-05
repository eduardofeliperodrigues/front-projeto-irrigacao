import React, { useState } from 'react'
import styled from 'styled-components'

import api from '../services/api'

function CreatePerfil() {

  const [inputs, setInputs] = useState({})

  const handleChanges = (event) => {
    const name = event.target.name
    const value = event.target.value

    setInputs( values => ({...values, [name]: value}))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const response = await api.post('/planta', inputs)
    console.log(response)

    setInputs("")
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Label> Planta: </Label>
        <Input name="planta" type="text" placeholder='Nome da planta' onChange={handleChanges} value={ inputs.planta || ""} />

        <Label> Tempo de irrigação em segundos: </Label>
        <Input name="irrigationTime" type="number" placeholder='Tempo de irrigação' onChange={handleChanges} value={ inputs.irrigationTime || ""}/>

        <Label> Humidade mínima do solo: </Label>
        <Input name="minimumSoilHumidity" type="number" placeholder='Humidade mínima' onChange={handleChanges} value={ inputs.minimumSoilHumidity || ""}/>

        <Label> Temperatura máxima para irrigação: </Label>
        <Input name="temperature" type="number" placeholder='Temperatura máxima' onChange={handleChanges} value={ inputs.temperature || ""}/>

        <Button type="submit">ENVIAR</Button>
      </Form>
    </Container>
  )
}

export default CreatePerfil;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  font-family: 'Roboto', sans-serif;
  font-size: 17px;
  font-weight: 300;

  text-align: left;

  margin-top: 25px;
`

const Input = styled.input`
  width: 500px;
  height: 35px;

  border: 1px black solid;
  border-radius: 7px;

  padding-left: 15px;

  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  font-weight: 300;
`

const Button = styled.button`
  background-color: #A9D567;
  border: #82B310 solid;
  border-radius: 7px;

  font-family: 'Roboto', sans-serif;
  font-weight: 500;

  width: 115px;
  height: 40px;

  margin-top: 25px;
`