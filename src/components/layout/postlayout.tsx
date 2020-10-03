import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import Header from 'src/components/header'
import Footer from 'src/components/footer'

const Container = styled.div`
  position: relative;
`

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  const [scroll, setScroll] = useState('0')

  useEffect(() => {
    const progressBarHandler = () => {
      const totalScroll = document.documentElement.scrollTop
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scroll = Math.abs(totalScroll / windowHeight)
      setScroll((scroll * 100).toString())
    }
    if (window) {
      window.addEventListener('scroll', progressBarHandler)
    }
    return () => {
      if (window) {
        window.removeEventListener('scroll', progressBarHandler)
      }
    }
  }, [])

  return (
    <Container>
      <Header showProgressBar={true} width={scroll} />
      {children}
      <Footer />
    </Container>
  )
}

export default Layout
