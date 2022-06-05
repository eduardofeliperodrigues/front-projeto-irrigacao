import React from 'react'
import styled from 'styled-components'

import cardBanner from "../images/cardBanner.png"

import '../services/api'
import api from '../services/api'

function Perfil(props) {

  async function handleClick(planta) {  
    await api.post(`/planta/${planta}`)
  }

  let button;
  if (props.active) {
    button = <Button> PERFIL ATIVO </Button>
  } else {
    button = <Button onClick={() => {
      handleClick(props.planta)
      window.location.reload()
    }}> ATIVAR PERFIL </Button>
  }

  return (
      <Container>
        <Img src={cardBanner} />
        <Title>{props.planta}</Title>
        <DataList>
          <Li>Humidade Mínima: {props.minimumSoilHumidity}%</Li>
          <Li>Temperatura máxima: {props.temperature}°C</Li>
          <Li>Tempo de Irrigação: {props.irrigationTime}s</Li>
        </DataList>
        {button}
    </Container>
  )
}

export default Perfil

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 150px;
  border: solid 2px black;
  border-radius: 7px;
  padding: 20px;
`

const Img = styled.img`
  max-width: 90px;
  margin-bottom: 30px;
`

const Title = styled.h2`
  font-family: 'Roboto', sans-serif;
  margin: 5px auto;
`

const DataList = styled.ul`
  font-family: 'Roboto', sans-serif;
  list-style: none;

  justify-content: center;
  align-items: center;
  padding: 0;

  font-size: 12px;
`

const Li = styled.li`
  margin: 15px auto;
`

const Button = styled.button`
  background-color: #A9D567;
  border: #82B310 solid;
  border-radius: 7px;

  font-family: 'Roboto', sans-serif;
  font-weight: 500;

  width: 115px;
  height: 40px;
`