import React, { useEffect } from 'react'
import PostType from 'src/types/post'
import PageWithLayout from 'src/types/pageWithLayout'
import { getAllPosts } from 'src/lib/posts'

import Layout from 'src/components/layout/mainLayout'
import Posts from 'src/domain/home/posts'

type HomeProps = {
  allPosts: PostType[]
}

const Home: React.FC<HomeProps> = ({ allPosts }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Posts posts={allPosts} />
    </div>
  )
}

;(Home as PageWithLayout).layout = Layout

export default Home

export const getStaticProps = async (): Promise<unknown> => {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt'])

  return {
    props: { allPosts },
  }
}
