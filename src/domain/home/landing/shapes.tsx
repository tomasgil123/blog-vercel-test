import React from 'react'
import styled from 'styled-components'
import { colors, space, breakpoints } from 'src/tokens'

import { TriangleBottom, TriangleTop } from 'src/components/shapes/triangle'
import { CircleSmall } from 'src/components/shapes/circle'
import { SquareHollowCenter } from 'src/components/shapes/square'

const ContainerTriangleCircleBottom = styled.div`
  bottom: 0px;
  right: 0px;
  position: absolute;
`

const ContainerCircleTriangleCircleBottom = styled.div`
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
    <ContainerTriangleCircleBottom>
      <ContainerCircleTriangleCircleBottom>
        <CircleSmall color={colors.base.gold} />
      </ContainerCircleTriangleCircleBottom>
      <TriangleBottom color={colors.base.tomato} orientation={'left'} />
    </ContainerTriangleCircleBottom>
  )
}

const ContainerSquareHollowCenterTop = styled.div`
  top: ${space.s4};
  right: -${space.s12};
  position: absolute;
  @media (min-width: ${breakpoints.md}) {
    top: ${space.s12};
    right: ${space.s16};
  }
  @media (min-width: ${breakpoints.lg}) {
    top: ${space.s24};
    right: ${space.s32};
  }
`

const ContainerTriangleSquareHollowCenterTop = styled.div`
  div {
    top: ${space.s8};
    left: ${space.s8};
    position: relative;
    z-index: 10;
    @media (min-width: ${breakpoints.md}) {
      top: ${space.s12};
      left: ${space.s8};
    }
  }
`

export const SquareHollowCenterTop: React.FC = () => {
  return (
    <ContainerSquareHollowCenterTop>
      <ContainerTriangleSquareHollowCenterTop>
        <TriangleTop color={colors.base.darksLateBlue} orientation={'right'} />
      </ContainerTriangleSquareHollowCenterTop>
      <SquareHollowCenter color={colors.base.deepSkyBlue} />
    </ContainerSquareHollowCenterTop>
  )
}
