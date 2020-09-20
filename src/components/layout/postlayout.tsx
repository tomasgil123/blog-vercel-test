import React from 'react'
import styled from 'styled-components'

import Header from 'src/components/header'

const Container = styled.div`
  overflow-x: hidden;
`

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <Header showProgressBar={true} />
      {children}
    </Container>
  )
}

export default Layout
