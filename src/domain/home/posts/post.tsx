/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styled from 'styled-components'
import { colors, space, breakpoints, boxShadow } from 'src/tokens'

import Link from 'next/link'

const Container = styled.div`
  width: 100%;
  margin: auto;
  text-align: left;
  padding: ${space.s4};
  margin-top: ${space.s4};
  margin-bottom: ${space.s4};
  box-shadow: ${boxShadow.shadowMd};
  border: 1px solid ${colors.base.borders};
`

const Title = styled.div`
  color: ${colors.text.primary};
  font-size: ${space.s5};
  text-align: left;
  font-weight: 500;
  cursor: pointer;
  padding-bottom: ${space.s4};
  @media (min-width: ${breakpoints.md}) {
    font-size: ${space.s6};
  }
  @media (min-width: ${breakpoints.lg}) {
    font-size: ${space.s8};
  }
`

const Body = styled.div`
  color: ${colors.text.primary};
  font-size: ${space.s4};
  font-weight: 400;
  line-height: 1.8;
  @media (min-width: ${breakpoints.md}) {
    font-size: ${space.s4};
  }
  @media (min-width: ${breakpoints.lg}) {
    font-size: ${space.s5};
  }
`

const CoverImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 250px;
`

type PostProps = {
  title: string
  date: string
  coverImage: string
  slug: string
}

const Post: React.FC<PostProps> = ({ title, date, coverImage, slug }) => {
  return (
    <Container>
      <Title>
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a>{title}</a>
        </Link>
      </Title>
      <Body>{date}</Body>
      <CoverImage src={coverImage} />
    </Container>
  )
}

export default Post
