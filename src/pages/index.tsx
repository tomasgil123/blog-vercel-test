import React from 'react'
import PostType from 'src/types/post'
import { getLastThreePosts } from 'src/lib/posts'

import Layout from 'src/components/layout/mainLayout'
import Landing from 'src/domain/home/landing'
import AboutMe from 'src/domain/home/about'
import Portfolio from 'src/domain/home/portfolio'
import Posts from 'src/domain/home/posts'

type HomeProps = {
  lastThreePosts: PostType[]
}

type HomeComponent = React.FC<HomeProps> & { layout: typeof Layout }

const Home: HomeComponent = ({ lastThreePosts }) => {
  return (
    <div>
      <Landing />
      <AboutMe />
      <Portfolio />
      <Posts lastThreePosts={lastThreePosts} />
    </div>
  )
}

Home.layout = Layout

export default Home

export const getStaticProps = async (): Promise<unknown> => {
  const lastThreePosts = getLastThreePosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { lastThreePosts },
  }
}
