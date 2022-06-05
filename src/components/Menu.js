import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

function Menu() {
  return (
    <Nav>
      <LinkText to="/#"><Container>OK</Container></LinkText> |{" "}
      <LinkText to="/#" onClick={() => console.log('OK')}>Expenses</LinkText>
      
    </Nav>
  )
}

export default Menu

const Nav = styled.nav`
  width: 100%;
  background-color: red;
`
const Container = styled.div`
  background-color: green;
  width: 35px;
  height: 35px;
`

const LinkText = styled(Link)`
  text-decoration: none;
  color: blue;
`