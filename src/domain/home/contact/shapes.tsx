import React from 'react'
import styled from 'styled-components'
import { colors, space, breakpoints } from 'src/tokens'

import { CircleHollowCenterSmall } from 'src/components/shapes/circle'

const ContainerCircle = styled.div`
  top: ${space.s8};
  left: -${space.s4};
  position: absolute;
  @media (min-width: ${breakpoints.md}) {
    top: ${space.s8};
    left: -${space.s4};
  }
  @media (min-width: ${breakpoints.lg}) {
    top: ${space.s48};
    left: -${space.s48};
  }
`

export const CircleHollow: React.FC = () => {
  return (
    <ContainerCircle>
      <CircleHollowCenterSmall color={colors.base.gold} />
    </ContainerCircle>
  )
}
