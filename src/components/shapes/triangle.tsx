import styled from 'styled-components'
import { space, breakpoints } from 'src/tokens'

type TriangleProps = {
  color: string
  orientation: string
}

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
