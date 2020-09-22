import React from 'react'

import Layout from 'src/components/layout/mainLayout'
import Landing from 'src/domain/home/landing'
import AboutMe from 'src/domain/home/about'
import Portfolio from 'src/domain/home/portfolio'

type HomeComponent = React.FC & { layout: typeof Layout }

const Home: HomeComponent = () => {
  return (
    <div>
      <Landing />
      <AboutMe />
      <Portfolio />
    </div>
  )
}

Home.layout = Layout

export default Home
