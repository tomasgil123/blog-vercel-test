import React from 'react'
import styled from 'styled-components'
import { colors, space, breakpoints } from 'src/tokens'

import { CircleTriangleBottom } from './shapes'
import ButtonLink from 'src/components/button/buttonLink'

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

const Body = styled.div`
  color: ${colors.text.primary};
  font-size: ${space.s4};
  font-weight: 400;
  text-align: center;
  line-height: 1.8;
  @media (min-width: ${breakpoints.md}) {
    font-size: ${space.s4};
  }
  @media (min-width: ${breakpoints.lg}) {
    font-size: ${space.s5};
  }
`

const ProfileImage = styled.img`
  border-radius: 50%;
  border: ${space.s1} solid ${colors.base.deepSkyBlue};
  height: ${space.s32};
  width: ${space.s32};
  margin-top: ${space.s6};
  margin-bottom: ${space.s6};
  margin-left: auto;
  margin-right: auto;
  @media (min-width: ${breakpoints.md}) {
    margin-top: ${space.s8};
    margin-bottom: ${space.s8};
    height: ${space.s40};
    width: ${space.s40};
  }
  @media (min-width: ${breakpoints.lg}) {
    margin-top: ${space.s12};
    margin-bottom: ${space.s12};
    height: ${space.s48};
    width: ${space.s48};
  }
`

const AboutMe: React.FC = () => {
  return (
    <Container>
      <Title>About me</Title>
      <ProfileImage src={'profile-pic.png'} />
      <Body>
        Im a front developer. I started this website with the idea of showing proyects I have done
        so far and write posts about new things I learn. I usually make stuff in React native and
        Nextjs.
      </Body>
      <ButtonLink
        link={
          <a
            href="https://www.linkedin.com/in/tomas-gil/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        }
      />
      <CircleTriangleBottom />
    </Container>
  )
}

export default AboutMe
