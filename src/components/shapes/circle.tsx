import styled from 'styled-components'
import { space, breakpoints } from 'src/tokens'

type CircleProps = {
  color: string
}

export const CircleSmall = styled.div`
  width: ${space.s12};
  height: ${space.s12};
  border-radius: 50%;
  background: ${(props: CircleProps) => props.color};
  @media (min-width: ${breakpoints.md}) {
    width: ${space.s16};
    height: ${space.s16};
  }
  @media (min-width: ${breakpoints.lg}) {
    width: ${space.s24};
    height: ${space.s24};
  }
`

export const Circle = styled.div`
  width: ${space.s20};
  height: ${space.s20};
  border-radius: 50%;
  background: ${(props: CircleProps) => props.color};
  @media (min-width: ${breakpoints.md}) {
    width: ${space.s32};
    height: ${space.s32};
  }
  @media (min-width: ${breakpoints.lg}) {
    width: ${space.s40};
    height: ${space.s40};
  }
`

export const CircleHollowCenterSmall = styled.div`
  border: solid ${space.s6};
  ${(props: CircleProps) => props.color};
  width: ${space.s12};
  height: ${space.s12};
  border-radius: 50%;
  @media (min-width: ${breakpoints.md}) {
    width: ${space.s16};
    height: ${space.s16};
  }
  @media (min-width: ${breakpoints.lg}) {
    width: ${space.s24};
    height: ${space.s24};
  }
`

export const CircleHollowCenter = styled.div`
  border: solid ${space.s8};
  ${(props: CircleProps) => props.color};
  width: ${space.s20};
  height: ${space.s20};
  border-radius: 50%;
  @media (min-width: ${breakpoints.md}) {
    width: ${space.s40};
    height: ${space.s40};
  }
  @media (min-width: ${breakpoints.lg}) {
    width: ${space.s64};
    height: ${space.s64};
  }
`

export const CircleVertical = styled.div`
  width: ${space.s10};
  height: ${space.s20};
  border-bottom-right-radius: ${space.s20};
  border-top-right-radius: ${space.s20};
  background: ${(props: CircleProps) => props.color};
  @media (min-width: ${breakpoints.md}) {
    width: ${space.s20};
    height: ${space.s40};
    border-bottom-right-radius: ${space.s40};
    border-top-right-radius: ${space.s40};
  }
  @media (min-width: ${breakpoints.lg}) {
    width: ${space.s32};
    height: ${space.s64};
    border-bottom-right-radius: ${space.s64};
    border-top-right-radius: ${space.s64};
  }
`

export const CircleHorizontal = styled.div`
  width: ${space.s20};
  height: ${space.s10};
  border-top-left-radius: ${space.s20};
  border-top-right-radius: ${space.s20};
  background: ${(props: CircleProps) => props.color};
  @media (min-width: ${breakpoints.md}) {
    width: ${space.s40};
    height: ${space.s20};
    border-top-left-radius: ${space.s40};
    border-top-right-radius: ${space.s40};
  }
  @media (min-width: ${breakpoints.lg}) {
    width: ${space.s64};
    height: ${space.s32};
    border-top-left-radius: ${space.s64};
    border-top-right-radius: ${space.s64};
  }
`
