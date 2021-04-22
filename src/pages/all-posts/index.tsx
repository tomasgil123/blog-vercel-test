import React, { useEffect } from 'react'
import { GetStaticProps } from 'next'
import { PostThumbnail } from 'src/types/post'
import PageWithLayout from 'src/types/pageWithLayout'
import { getAllPosts } from 'src/lib/posts'

// * Components *
import Layout from 'src/components/layout/mainLayout'
import Posts from 'src/domain/home/posts'

type ListPostsProps = {
  posts: PostThumbnail[]
  tag: string
}

const ListPosts: React.FC<ListPostsProps> = ({ posts, tag }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Posts posts={posts} tag={tag} />
    </div>
  )
}

;(ListPosts as PageWithLayout).layout = Layout

export default ListPosts

export const getStaticProps: GetStaticProps = async () => {
  const postAttributes = {
    title: '',
    date: '',
    slug: '',
    coverImage: '',
    tags: '',
  }
  const allPosts = getAllPosts<typeof postAttributes>(Object.keys(postAttributes))

  return {
    props: { posts: allPosts },
  }
}
