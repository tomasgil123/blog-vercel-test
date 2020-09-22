import React from 'react'
import styled from 'styled-components'
import PostType from 'src/types/post'
import { colors, space, breakpoints } from 'src/tokens'

import Post from './post'

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
  lastThreePosts: PostType[]
}

const Posts: React.FC<PostsProps> = ({ lastThreePosts }) => {
  return (
    <Container>
      <Title>My latests posts</Title>
      {lastThreePosts.map((post) => (
        <Post
          key={post.title}
          title={post.title}
          date={post.date}
          coverImage={post.coverImage}
          slug={post.slug}
        />
      ))}
    </Container>
  )
}

export default Posts
