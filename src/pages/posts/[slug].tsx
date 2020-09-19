import React from 'react'
import PostType from 'src/types/post'
import { getPostBySlug, getAllPosts } from 'src/lib/posts'

import PostBody from 'src/domain/post/postBody'

type PostPageProps = {
  post: PostType
}

const PostPage: React.FunctionComponent<PostPageProps> = ({ post }) => {
  return (
    <>
      <PostBody source={post.content} />
    </>
  )
}

export default PostPage

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params): Promise<unknown> {
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

export async function getStaticPaths(): Promise<unknown> {
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
