import React from 'react'
import styled from 'styled-components'
import { colors, space, breakpoints } from 'src/tokens'

import { TriangleBottomSmall } from 'src/components/shapes/triangle'

const ContainerTriangleTop = styled.div`
  top: -${space.s4};
  right: -${space.s4};
  position: absolute;
  @media (min-width: ${breakpoints.md}) {
    top: -${space.s8};
    right: 0px;
  }
  @media (min-width: ${breakpoints.lg}) {
    top: -${space.s12};
    right: 0px;
  }
`

const ContainerTwoTriangles = styled.div`
  top: ${space.s16};
  right: 0px;
  position: absolute;
  @media (min-width: ${breakpoints.md}) {
    top: ${space.s48};
    right: -${space.s24};
  }
  @media (min-width: ${breakpoints.lg}) {
    top: ${space.s48};
    right: -${space.s48};
  }
`

export const TwoTriangles: React.FC = () => {
  return (
    <ContainerTwoTriangles>
      <ContainerTriangleTop>
        <TriangleBottomSmall color={colors.base.tomato} orientation={'left'} />
      </ContainerTriangleTop>
      <TriangleBottomSmall color={colors.base.darksLateBlue} orientation={'right'} />
    </ContainerTwoTriangles>
  )
}
