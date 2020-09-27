import React from 'react'
import styled from 'styled-components'
import { colors, space, breakpoints } from 'src/tokens'

import {
  TriangleCircleBottom,
  SquareHollowCenterTop,
  GroupCirclesLeft,
  SquareSmallCenter,
  VerySmallCircle,
} from './shapes'
import MainButton from 'src/components/button'

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
  }
  @media (min-width: ${breakpoints.lg}) {
    padding-top: ${space.s40};
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

const ContainerWorkStatus = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: ${space.s4};
  justify-content: center;
  align-items: center;
`

const WorkStatus = styled.div`
  color: ${colors.text.primary};
  font-size: ${space.s4};
  padding-left: ${space.s1};
`

const Landing: React.FC = () => {
  const onSendEmail = () => {
    window.open('mailto:tomasgil1234@gmail.com')
  }
  return (
    <HomeContainer>
      <ContainerWorkStatus>
        <VerySmallCircle color={colors.base.darksLateBlue} />
        <WorkStatus>Available for work</WorkStatus>
      </ContainerWorkStatus>
      <ContainerTitle>
        <Title>Hi, Im Tomas</Title>
        <Subtitle>Im a front developer</Subtitle>
        <MainButton text={'Send me an email'} onClickButton={onSendEmail} />
      </ContainerTitle>
      <SquareHollowCenterTop />
      <TriangleCircleBottom />
      <GroupCirclesLeft />
      <SquareSmallCenter />
    </HomeContainer>
  )
}

export default Landing
