import styled from 'styled-components'
import { space, breakpoints } from 'src/tokens'

type TriangleProps = {
  color: string
  orientation: string
}

export const TriangleTopSmall = styled.div`
  width: 0;
  height: 0;
  border-top: ${space.s12} solid ${(props: TriangleProps) => props.color};
  border-right: ${(props: TriangleProps) =>
    props.orientation === 'right' ? `${space.s12} solid transparent` : 'inherit'};
  border-left: ${(props: TriangleProps) =>
    props.orientation === 'left' ? `${space.s12} solid transparent` : 'inherit'};
  @media (min-width: ${breakpoints.md}) {
    border-top: ${space.s16} solid ${(props: TriangleProps) => props.color};
    border-right: ${(props: TriangleProps) =>
      props.orientation === 'right' ? `${space.s16} solid transparent` : 'inherit'};
    border-left: ${(props: TriangleProps) =>
      props.orientation === 'left' ? `${space.s16} solid transparent` : 'inherit'};
  }
  @media (min-width: ${breakpoints.lg}) {
    border-top: ${space.s24} solid ${(props: TriangleProps) => props.color};
    border-right: ${(props: TriangleProps) =>
      props.orientation === 'right' ? `${space.s24} solid transparent` : 'inherit'};
    border-left: ${(props: TriangleProps) =>
      props.orientation === 'left' ? `${space.s24} solid transparent` : 'inherit'};
  }
`

export const TriangleTop = styled.div`
  width: 0;
  height: 0;
  border-top: ${space.s12} solid ${(props: TriangleProps) => props.color};
  border-right: ${(props: TriangleProps) =>
    props.orientation === 'right' ? `${space.s12} solid transparent` : 'inherit'};
  border-left: ${(props: TriangleProps) =>
    props.orientation === 'left' ? `${space.s12} solid transparent` : 'inherit'};
  @media (min-width: ${breakpoints.md}) {
    border-top: ${space.s16} solid ${(props: TriangleProps) => props.color};
    border-right: ${(props: TriangleProps) =>
      props.orientation === 'right' ? `${space.s12} solid transparent` : 'inherit'};
    border-left: ${(props: TriangleProps) =>
      props.orientation === 'left' ? `${space.s12} solid transparent` : 'inherit'};
  }
  @media (min-width: ${breakpoints.lg}) {
    border-top: ${space.s16} solid ${(props: TriangleProps) => props.color};
    border-right: ${(props: TriangleProps) =>
      props.orientation === 'right' ? `${space.s12} solid transparent` : 'inherit'};
    border-left: ${(props: TriangleProps) =>
      props.orientation === 'left' ? `${space.s12} solid transparent` : 'inherit'};
  }
`

export const TriangleBottom = styled.div`
  width: 0;
  height: 0;
  border-bottom: ${space.s32} solid ${(props: TriangleProps) => props.color};
  border-right: ${(props: TriangleProps) =>
    props.orientation === 'right' ? `${space.s32} solid transparent` : 'inherit'};
  border-left: ${(props: TriangleProps) =>
    props.orientation === 'left' ? `${space.s32} solid transparent` : 'inherit'};
  @media (min-width: ${breakpoints.md}) {
    border-bottom: ${space.s48} solid ${(props: TriangleProps) => props.color};
    border-right: ${(props: TriangleProps) =>
      props.orientation === 'right' ? `${space.s48} solid transparent` : 'inherit'};
    border-left: ${(props: TriangleProps) =>
      props.orientation === 'left' ? `${space.s48} solid transparent` : 'inherit'};
  }
  @media (min-width: ${breakpoints.lg}) {
    border-bottom: ${space.s64} solid ${(props: TriangleProps) => props.color};
    border-right: ${(props: TriangleProps) =>
      props.orientation === 'right' ? `${space.s64} solid transparent` : 'inherit'};
    border-left: ${(props: TriangleProps) =>
      props.orientation === 'left' ? `${space.s64} solid transparent` : 'inherit'};
  }
`

export const TriangleBottomSmall = styled.div`
  width: 0;
  height: 0;
  border-bottom: ${space.s12} solid ${(props: TriangleProps) => props.color};
  border-right: ${(props: TriangleProps) =>
    props.orientation === 'right' ? `${space.s12} solid transparent` : 'inherit'};
  border-left: ${(props: TriangleProps) =>
    props.orientation === 'left' ? `${space.s12} solid transparent` : 'inherit'};
  @media (min-width: ${breakpoints.md}) {
    border-bottom: ${space.s16} solid ${(props: TriangleProps) => props.color};
    border-right: ${(props: TriangleProps) =>
      props.orientation === 'right' ? `${space.s16} solid transparent` : 'inherit'};
    border-left: ${(props: TriangleProps) =>
      props.orientation === 'left' ? `${space.s16} solid transparent` : 'inherit'};
  }
  @media (min-width: ${breakpoints.lg}) {
    border-bottom: ${space.s24} solid ${(props: TriangleProps) => props.color};
    border-right: ${(props: TriangleProps) =>
      props.orientation === 'right' ? `${space.s24} solid transparent` : 'inherit'};
    border-left: ${(props: TriangleProps) =>
      props.orientation === 'left' ? `${space.s24} solid transparent` : 'inherit'};
  }
`
