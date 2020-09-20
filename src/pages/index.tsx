import React from 'react'
import styled from 'styled-components'

import Layout from 'src/components/layout/mainLayout'

const Container = styled.div`
  color: red;
`

type HomeComponent = React.FC & { layout: typeof Layout }

const Home: HomeComponent = () => {
  return <Container>Home blog</Container>
}

Home.layout = Layout

export default Home
