/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { PostThumbnail } from 'src/types/post'
import { colors, space, breakpoints } from 'src/tokens'

// * Utils *
import { getMainTags, getTagsColor, getTagsTextColor } from 'src/utils/tags'

// * Components *
import ButtonLink from 'src/components/button/buttonLink'
import Post from './post'
import { TwoTriangles } from './shapes'

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

const Title = styled.h1`
  color: ${colors.text.primary};
  font-size: ${space.s8};
  text-align: center;
  font-weight: 700;
  padding-bottom: ${space.s12};
  @media (min-width: ${breakpoints.md}) {
    font-size: ${space.s8};
  }
  @media (min-width: ${breakpoints.lg}) {
    font-size: ${space.s16};
  }
`

const Subtitle = styled.h2`
  color: ${colors.text.primary};
  font-size: ${space.s5};
  text-align: center;
  font-weight: 700;
  padding-bottom: ${space.s1};
  @media (min-width: ${breakpoints.md}) {
    font-size: ${space.s6};
  }
  @media (min-width: ${breakpoints.lg}) {
    font-size: ${space.s8};
  }
`

type PostsProps = {
  posts: PostThumbnail[]
  totalPosts?: number
  tag?: string
}

const Posts = ({ posts, totalPosts, tag }: PostsProps): JSX.Element => {
  return (
    <Container>
      <Title>My latests posts</Title>
      <Subtitle>{tag ? 'Other topics' : 'Topics'}</Subtitle>
      <div className="flex flexs-row flex-wrap justify-center py-2">
        {getMainTags
          .filter((item) => item !== tag)
          .map((tag) => (
            <Link key={tag} href={`/all-posts/${tag}`}>
              <a
                style={{ background: getTagsColor(tag), color: getTagsTextColor(tag) }}
                className="h-9 leading-6 py-1 px-2 m-1 opacity-70 rounded-lg text-base font-normal"
              >
                {tag}
              </a>
            </Link>
          ))}
      </div>
      <TwoTriangles />
      {posts.map((post) => (
        <Post
          key={post.title}
          title={post.title}
          date={post.date}
          coverImage={post.coverImage}
          slug={post.slug}
          tags={post.tags}
        />
      ))}
      {totalPosts > 3 && (
        <ButtonLink
          link={
            <Link href="/all-posts">
              <a>See all posts</a>
            </Link>
          }
        />
      )}
    </Container>
  )
}

export default Posts
