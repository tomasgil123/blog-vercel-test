import React from 'react'
import styled from 'styled-components'
import { colors, space, breakpoints } from 'src/tokens'

import { CircleTriangleBottom } from './shapes'

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

const Body = styled.div`
  color: ${colors.text.primary};
  font-size: ${space.s4};
  font-weight: 300;
  text-align: center;
  line-height: 1.8;
  @media (min-width: ${breakpoints.md}) {
    font-size: ${space.s4};
  }
  @media (min-width: ${breakpoints.lg}) {
    font-size: ${space.s4};
  }
`

const ProfileImage = styled.img`
  border-radius: 50%;
  border: ${space.s1} solid ${colors.base.deepSkyBlue};
  height: ${space.s32};
  width: ${space.s32};
`

const AboutMe: React.FC = () => {
  return (
    <Container>
      <Title>About me</Title>
      <ProfileImage src={'profile-pic.png'} />
      <Body>
        Im a front developer. I started this website with the idea of showing proyects I have done
        so far and write posts about new things I learn
      </Body>
      <CircleTriangleBottom />
    </Container>
  )
}

export default AboutMe
