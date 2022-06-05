import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import Perfil from '../components/Perfil'

import api from '../services/api'


function Home() {

  const [plantas, setPlantas] = useState([])

  async function listAllPlantas() {
    await api.get('/planta/list').then((response) => {
      setPlantas(response.data)
    })
  }

  useEffect(() => {
    listAllPlantas()
  }, [])

  return (
    <Container>
      <Main>
        {
          plantas.map((planta) => {
            return (
              <Perfil
                key={planta.id}
                planta={planta.planta}
                minimumSoilHumidity={planta.minimumSoilHumidity}
                temperature={planta.temperature}
                irrigationTime={planta.irrigationTime}
                active={planta.active}
              />
            )
          })
        }
      </Main>
    </Container>
  )
}

export default Home

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;

  max-width: 980px;
`