import React from 'react'
import styled from 'styled-components'
import { colors, space, breakpoints } from 'src/tokens'

import { Circle, CircleHorizontal } from 'src/components/shapes/circle'
import { SquareHollowCenterSmall } from 'src/components/shapes/square'

const ContainerCircleSquareBottom = styled.div`
  top: ${space.s24};
  right: -${space.s8};
  position: absolute;
  @media (min-width: ${breakpoints.md}) {
    top: ${space.s8};
    right: -${space.s24};
  }
  @media (min-width: ${breakpoints.lg}) {
    top: -${space.s12};
    right: -${space.s64};
  }
`

const ContainerSquare = styled.div`
  div {
    top: ${space.s8};
    left: ${space.s4};
    position: relative;
    z-index: 10;
    @media (min-width: ${breakpoints.md}) {
      top: ${space.s12};
      left: ${space.s8};
    }
    @media (min-width: ${breakpoints.lg}) {
      top: ${space.s16};
      left: ${space.s8};
    }
  }
`

export const CircleSquareBottom: React.FC = () => {
  return (
    <ContainerCircleSquareBottom>
      <ContainerSquare>
        <SquareHollowCenterSmall color={colors.base.gold} />
      </ContainerSquare>
      <Circle color={colors.base.deepSkyBlue} />
    </ContainerCircleSquareBottom>
  )
}

const CircleHorizontalExtended = styled(CircleHorizontal)`
  @media (min-width: ${breakpoints.md}) {
    width: ${space.s32};
    height: ${space.s16};
    border-top-left-radius: ${space.s32};
    border-top-right-radius: ${space.s32};
  }
  @media (min-width: ${breakpoints.lg}) {
    width: ${space.s40};
    height: ${space.s20};
    border-top-left-radius: ${space.s40};
    border-top-right-radius: ${space.s40};
  }
`

const ContainerCircleHorizontal = styled.div`
  bottom: -${space.s64};
  left: -${space.s8};
  position: absolute;
  @media (min-width: ${breakpoints.md}) {
    bottom: -${space.s32};
    left: -${space.s48};
  }
  @media (min-width: ${breakpoints.lg}) {
    bottom: -${space.s32};
    left: -${space.s64};
  }
`

export const CircleHorizontalBottom: React.FC = () => {
  return (
    <ContainerCircleHorizontal>
      <CircleHorizontalExtended color={colors.base.tomato} />
    </ContainerCircleHorizontal>
  )
}
