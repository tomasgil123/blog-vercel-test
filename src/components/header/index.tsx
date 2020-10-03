import React from 'react'
import styled from 'styled-components'
import { colors, space, breakpoints, boxShadow } from 'src/tokens'

type HeaderWrapperProps = {
  showProgressBar: boolean
}

const HeaderWrapper = styled.div`
  position: ${(props: HeaderWrapperProps) => (props.showProgressBar ? 'sticky' : 'relative')};
  top: 0px;
  left: 0px;
  background-color: ${colors.base.white};
  z-index: 101;
  font-size: ${space.s4};
  width: 100%;
  overflow-x: hidden;
  box-shadow: ${(props: HeaderWrapperProps) =>
    props.showProgressBar ? 'inherit' : `${boxShadow.shadow}`};
`

const Container = styled.div`
  text-align: center;
  padding-top: ${space.s2};
  padding-bottom: ${space.s2};
  width: 100%;
  flex-grow: 1;
  @media (min-width: ${breakpoints.md}) {
    text-align: left;
    padding-left: ${space.s12};
    padding-right: ${space.s12};
  }
  @media (min-width: ${breakpoints.lg}) {
    text-align: left;
    padding-left: ${space.s24};
    padding-right: ${space.s24};
  }
`

const Title = styled.span`
  color: ${colors.base.primaryGreen};
  font-weight: 900;
  font-size: ${space.s5};
  cursor: pointer;
  @media (min-width: ${breakpoints.md}) {
    font-size: ${space.s6};
  }
`

type ProgressBarProps = {
  width: string
}

const ProgressBar = styled.div`
  width: ${(props: ProgressBarProps) => `${props.width}%`};
  position: relative;
  top: 0;
  left: 0;
  height: 4px;
  background: ${colors.base.darksLateBlue};
  transition: width 0.5s;
  &:after {
    content: '';
    width: 100vw;
    height: 4px;
    background: #dfe4e7;
    position: absolute;
    z-index: -1;
  }
`

type HeaderProps = {
  showProgressBar: boolean
  width?: string
}

const Header: React.FunctionComponent<HeaderProps> = ({ showProgressBar, width }) => {
  return (
    <HeaderWrapper showProgressBar={showProgressBar}>
      <Container>
        <Title>{'{ Tomas Gil }'}</Title>
      </Container>
      {showProgressBar && <ProgressBar width={width} />}
    </HeaderWrapper>
  )
}

export default Header
