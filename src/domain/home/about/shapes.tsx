import React from 'react'
import styled from 'styled-components'
import { colors, space, breakpoints } from 'src/tokens'

import { TriangleBottomSmall } from 'src/components/shapes/triangle'
import { SquareSmall } from 'src/components/shapes/square'

const ContainerCircleTriangleBottom = styled.div`
  top: ${space.s12};
  left: ${space.s8};
  position: absolute;
  @media (min-width: ${breakpoints.lg}) {
    top: ${space.s32};
    left: -${space.s32};
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
      left: ${space.s4};
    }
    @media (min-width: ${breakpoints.lg}) {
      top: ${space.s12};
      left: ${space.s4};
    }
  }
`

export const CircleTriangleBottom: React.FC = () => {
  return (
    <ContainerCircleTriangleBottom>
      <ContainerSquare>
        <SquareSmall color={colors.base.darksLateBlue} />
      </ContainerSquare>
      <TriangleBottomSmall color={colors.base.tomato} orientation={'right'} />
    </ContainerCircleTriangleBottom>
  )
}
