import React from 'react'
import styled from 'styled-components'
import { colors, space, breakpoints } from 'src/tokens'

import { TriangleBottom } from 'src/components/shapes/triangle'
import { CircleSmall } from 'src/components/shapes/circle'

const Container = styled.div`
  bottom: 0px;
  right: 0px;
  position: absolute;
`

const ContainerCircle = styled.div`
  div {
    top: ${space.s16};
    left: ${space.s16};
    position: relative;
    z-index: 10;
    @media (min-width: ${breakpoints.md}) {
      top: ${space.s24};
      left: ${space.s24};
    }
    @media (min-width: ${breakpoints.lg}) {
      top: ${space.s32};
      left: ${space.s32};
    }
  }
`

export const TriangleCircleBottom: React.FC = () => {
  return (
    <Container>
      <ContainerCircle>
        <CircleSmall color={colors.base.gold} />
      </ContainerCircle>
      <TriangleBottom color={colors.base.tomato} orientation={'left'} />
    </Container>
  )
}
