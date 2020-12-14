import React from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import PostType from 'src/types/post'
import { colors, space, breakpoints } from 'src/tokens'

import Post from './post'
import { TwoTriangles } from './shapes'
import MainButton from 'src/components/button'

const Container = styled.div`
  position: relative;
  padding-top: ${space.s12};
  padding-bottom: ${space.s8};
  max-width: 600px;
  width: 100%;
  margin: auto;
  text-align: center;
  padding-left: ${space.s4};
  padding-right: ${space.s4};
  @media (min-width: ${breakpoints.md}) {
    padding-top: ${space.s40};
  }
  @media (min-width: ${breakpoints.lg}) {
    padding-top: ${space.s40};
  }
`

const Title = styled.div`
  color: ${colors.text.primary};
  font-size: ${space.s6};
  text-align: center;
  font-weight: 700;
  padding-bottom: ${space.s4};
  @media (min-width: ${breakpoints.md}) {
    font-size: ${space.s8};
  }
  @media (min-width: ${breakpoints.lg}) {
    font-size: ${space.s12};
  }
`

type PostsProps = {
  posts: PostType[]
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  const router = useRouter()
  const onSeeMorePosts = () => {
    router.push('/all-posts')
  }

  return (
    <Container>
      <Title>My latests posts</Title>
      <TwoTriangles />
      {posts.map((post) => (
        <Post
          key={post.title}
          title={post.title}
          date={post.date}
          coverImage={post.coverImage}
          slug={post.slug}
        />
      ))}
      {posts.length <= 3 && (
        <>
          <MainButton text={'See more posts'} onClickButton={onSeeMorePosts} />
        </>
      )}
    </Container>
  )
}

export default Posts
