import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import api from '../services/api';

function ListLastIrrigations() {

  const [allIrrigations, setAllIrrigations] = useState([])

  async function loadData() {
    await api.get('/data/listAll').then((response) => {
      console.log(response)
      setAllIrrigations(response.data)
    });
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <Container>
      <Table>
        <Tr>
          <Th>Data</Th>
          <Th>Hora</Th>
          <Th>Humidade</Th>
          <Th>Temperatura</Th>
        </Tr>
        {
          allIrrigations.map((irrigation) => {

            const date = new Date(irrigation.date).toLocaleDateString()
            const time = new Date(irrigation.date).toLocaleTimeString()

            return (
              <Tr>
                <Td>{date}</Td>
                <Td>{time}</Td>
                <Td>{irrigation.humidity}%</Td>
                <Td>{irrigation.temperature}°C</Td>
              </Tr>
            )
          })
        }
      </Table>
    </Container>
  )
}

export default ListLastIrrigations;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Table = styled.table`
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  border: 1px solid black;
  border-collapse: collapse;
`

const Tr = styled.tr`
  border: 1px solid black;
`

const Th = styled.th`
  width: 150px;
  text-align: left;
`

const Td = styled.td`
  width: 150px;
  padding-top: 20px;
`
