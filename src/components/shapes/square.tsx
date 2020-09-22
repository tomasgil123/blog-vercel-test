import styled from 'styled-components'
import { space, breakpoints } from 'src/tokens'

type SquareProps = {
  color: string
}

export const SquareSmall = styled.div`
  width: ${space.s12};
  height: ${space.s12};
  background: ${(props: SquareProps) => props.color};
  @media (min-width: ${breakpoints.md}) {
    width: ${space.s16};
    height: ${space.s16};
  }
  @media (min-width: ${breakpoints.lg}) {
    width: ${space.s24};
    height: ${space.s24};
  }
`

export const SquareHollowCenterSmall = styled.div`
  border: solid ${space.s3} ${(props: SquareProps) => props.color};
  width: ${space.s12};
  height: ${space.s12};
  @media (min-width: ${breakpoints.md}) {
    width: ${space.s16};
    height: ${space.s16};
  }
  @media (min-width: ${breakpoints.lg}) {
    width: ${space.s24};
    height: ${space.s24};
  }
`

export const SquareHollowCenter = styled.div`
  border: solid ${space.s4} ${(props: SquareProps) => props.color};
  width: ${space.s24};
  height: ${space.s24};
  @media (min-width: ${breakpoints.md}) {
    width: ${space.s32};
    height: ${space.s32};
  }
  @media (min-width: ${breakpoints.lg}) {
    width: ${space.s40};
    height: ${space.s40};
  }
`
