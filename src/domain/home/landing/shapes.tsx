import React from 'react'
import styled from 'styled-components'
import { colors, space, breakpoints } from 'src/tokens'

import { TriangleBottom, TriangleTopSmall } from 'src/components/shapes/triangle'
import { CircleSmall, CircleVertical } from 'src/components/shapes/circle'
import { SquareHollowCenter, SquareSmall } from 'src/components/shapes/square'

const ContainerTriangleCircleBottom = styled.div`
  bottom: 0px;
  right: 0px;
  position: absolute;
`
export const VerySmallCircle = styled(CircleSmall)`
  width: ${space.s3};
  height: ${space.s3};
  @media (min-width: ${breakpoints.md}) {
    width: ${space.s3};
    height: ${space.s3};
  }
  @media (min-width: ${breakpoints.lg}) {
    width: ${space.s3};
    height: ${space.s3};
  }
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
        <TriangleTopSmall color={colors.base.darksLateBlue} orientation={'right'} />
      </ContainerTriangleSquareHollowCenterTop>
      <SquareHollowCenter color={colors.base.deepSkyBlue} />
    </ContainerSquareHollowCenterTop>
  )
}

const ContainerGroupCirclesLeft = styled.div`
  bottom: -${space.s6};
  left: ${space.s20};
  position: relative;
  z-index: 10;
  @media (min-width: ${breakpoints.md}) {
    bottom: ${space.s4};
    left: ${space.s24};
  }
  @media (min-width: ${breakpoints.lg}) {
    bottom: ${space.s48};
    left: ${space.s48};
  }
`

const ContainerTriangleGroupCirclesLeft = styled.div`
  div {
    bottom: -${space.s20};
    right: ${space.s16};
    position: relative;
    z-index: 10;
    @media (min-width: ${breakpoints.md}) {
      bottom: -${space.s32};
      right: ${space.s16};
    }
    @media (min-width: ${breakpoints.lg}) {
      bottom: -${space.s48};
      right: ${space.s32};
    }
  }
`

const ContainerCircleSmallGroupCirclesLeft = styled.div`
  div {
    bottom: -${space.s16};
    right: ${space.s16};
    position: relative;
    z-index: 10;
    @media (min-width: ${breakpoints.md}) {
      bottom: -${space.s24};
      right: ${space.s20};
    }
    @media (min-width: ${breakpoints.lg}) {
      bottom: -${space.s32};
      right: ${space.s32};
    }
  }
`

export const GroupCirclesLeft: React.FC = () => {
  return (
    <ContainerGroupCirclesLeft>
      <ContainerCircleSmallGroupCirclesLeft>
        <CircleSmall color={colors.base.gold} />
      </ContainerCircleSmallGroupCirclesLeft>
      <ContainerTriangleGroupCirclesLeft>
        <TriangleTopSmall color={colors.base.darksLateBlue} orientation={'left'} />
      </ContainerTriangleGroupCirclesLeft>
      <CircleVertical color={colors.base.deepSkyBlue} />
    </ContainerGroupCirclesLeft>
  )
}

const ContainerSquareSmallCenter = styled.div`
  top: ${space.s20};
  left: ${space.s40};
  position: relative;
  z-index: 10;
  @media (min-width: ${breakpoints.md}) {
    top: 0px;
    left: 24rem;
  }
  @media (min-width: ${breakpoints.lg}) {
    top: -${space.s64};
    left: 30rem;
  }
`

export const SquareSmallCenter: React.FC = () => {
  return (
    <ContainerSquareSmallCenter>
      <SquareSmall color={colors.base.deepSkyBlue} />
    </ContainerSquareSmallCenter>
  )
}
