import React from 'react'

import Layout from 'src/components/layout/mainLayout'
import Landing from 'src/domain/home/landing'

type HomeComponent = React.FC & { layout: typeof Layout }

const Home: HomeComponent = () => {
  return (
    <div>
      <Landing />
    </div>
  )
}

Home.layout = Layout

export default Home
