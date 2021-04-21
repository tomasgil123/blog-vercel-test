/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styled from 'styled-components'
import { colors, space, breakpoints, boxShadow } from 'src/tokens'
import {
  TYPESCRIPT,
  TESTING,
  VUE,
  VUE_SUSPENSE,
  PLAYWRIGHT,
  REACT,
  NEXTJS,
  RENDER_PROPS,
  MOCK_SERVICE_WORKER,
} from 'src/constants/tags'
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
  padding-bottom: ${space.s2};
  @media (min-width: ${breakpoints.md}) {
    font-size: ${space.s6};
  }
  @media (min-width: ${breakpoints.lg}) {
    font-size: ${space.s8};
  }
`

const ContainerDateInformation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const DateIcon = styled.div`
  color: ${colors.text.secondary};
  padding-right: ${space.s2};
`

const Body = styled.div`
  color: ${colors.text.secondary};
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

const ContainerTags = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: ${space.s2};
  padding-bottom: ${space.s2};
  flex-wrap: wrap;
`

const Tag = styled.span`
  padding-top: ${space.s1};
  padding-bottom: ${space.s1};
  padding-left: ${space.s2};
  padding-right: ${space.s2};
  font-size: 14px;
  font-weight: bold;
  line-height: none;
  margin: ${space.s1};
  opacity: 0.7;
  background-color: ${({ color }: any) => color};
  border-radius: ${space.s8};
`

type PostProps = {
  title: string
  date: string
  coverImage: string
  slug: string
  tags: string
}

const formatDate = (date) => {
  const dateObject = new Date(date)
  const monthNameShort = dateObject.toLocaleString('en', { month: 'short' })
  const numberDay = dateObject.getDate()
  const numberYear = dateObject.getFullYear()
  return `${monthNameShort} ${numberDay}, ${numberYear}`
}

const getTagsColor = (tag: string) => {
  switch (tag) {
    case TYPESCRIPT:
      return `${colors.base.darksLateBlue}`
    case REACT:
      return `${colors.base.deepSkyBlue}`
    case NEXTJS:
      return `${colors.base.deepSkyBlue_shade1}`
    case RENDER_PROPS:
      return `${colors.base.deepSkyBlue_shade2}`
    case VUE:
      return `${colors.text.success}`
    case VUE_SUSPENSE:
      return `${colors.text.success_shade1}`
    case TESTING:
      return `${colors.base.gold}`
    case PLAYWRIGHT:
      return `${colors.base.gold_shade1}`
    case MOCK_SERVICE_WORKER:
      return `${colors.base.gold_shade2}`
    default:
      return `${colors.base.tomato}`
  }
}

const Post: React.FC<PostProps> = ({ title, date, coverImage, slug, tags }) => {
  return (
    <Container>
      <Title>
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a>{title}</a>
        </Link>
      </Title>
      <ContainerDateInformation>
        <DateIcon>
          <img src={'calendar.svg'} alt="calendar" />
        </DateIcon>
        <Body>{formatDate(date)}</Body>
      </ContainerDateInformation>
      <ContainerTags>
        {tags.split('*').map((tag) => (
          <Tag key={tag} color={getTagsColor(tag)}>
            {tag}
          </Tag>
        ))}
      </ContainerTags>
      <CoverImage src={coverImage} />
    </Container>
  )
}

export default Post
