import React from 'react'
import styled from 'styled-components'
import PostType from 'src/types/post'
import { getPostBySlug, getAllPosts } from 'src/lib/posts'

import PostBody from 'src/components/postBody'

const Container = styled.div`
  color: red;
`

type PostPageProps = {
  post: PostType
}

const PostPage: React.FunctionComponent<PostPageProps> = ({ post }) => {
  return (
    <Container>
      Post page
      <PostBody source={post.content} />
    </Container>
  )
}

export default PostPage

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params): Promise<any> {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])

  return {
    props: {
      post: {
        ...post,
      },
    },
  }
}

export async function getStaticPaths(): Promise<any> {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      }
    }),
    fallback: false,
  }
}
