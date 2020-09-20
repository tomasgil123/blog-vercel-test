import React from 'react'

import Layout from 'src/components/layout/mainLayout'
import Landing from 'src/domain/home/landing'
import AboutMe from 'src/domain/home/about'

type HomeComponent = React.FC & { layout: typeof Layout }

const Home: HomeComponent = () => {
  return (
    <div>
      <Landing />
      <AboutMe />
    </div>
  )
}

Home.layout = Layout

export default Home
