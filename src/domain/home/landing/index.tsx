import React from 'react'
import styled from 'styled-components'
import { colors, space, breakpoints } from 'src/tokens'

import { TriangleCircleBottom, SquareHollowCenterTop } from './shapes'

const HomeContainer = styled.div`
  background-color: ${colors.base.white};
  height: 90vh;
  position: relative;
`

const ContainerTitle = styled.div`
  position: relative;
  width: 70%;
  margin: auto;
  text-align: center;
  padding-top: ${space.s20};
  padding-bottom: ${space.s8};
  @media (min-width: ${breakpoints.md}) {
    padding-top: ${space.s40};
    padding-left: ${space.s12};
    padding-right: ${space.s8};
  }
  @media (min-width: ${breakpoints.lg}) {
    padding-top: ${space.s40};
    padding-left: ${space.s40};
  }
`

const Title = styled.div`
  color: ${colors.text.primary};
  font-size: ${space.s8};
  text-align: center;
  font-weight: 700;
  padding-bottom: ${space.s4};
  @media (min-width: ${breakpoints.md}) {
    font-size: ${space.s12};
  }
  @media (min-width: ${breakpoints.lg}) {
    font-size: ${space.s20};
  }
`

const Subtitle = styled.div`
  color: ${colors.text.primary};
  font-size: ${space.s5};
  font-weight: 300;
  text-align: center;
  @media (min-width: ${breakpoints.md}) {
    font-size: ${space.s6};
  }
  @media (min-width: ${breakpoints.lg}) {
    font-size: ${space.s8};
  }
`

const Landing: React.FC = () => {
  return (
    <HomeContainer>
      <ContainerTitle>
        <Title>Hi, Im Tomas</Title>
        <Subtitle>Im a front developer</Subtitle>
      </ContainerTitle>
      <SquareHollowCenterTop />
      <TriangleCircleBottom />
    </HomeContainer>
  )
}

export default Landing
