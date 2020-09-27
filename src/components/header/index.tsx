import React from 'react'
import styled from 'styled-components'
import { colors, space, breakpoints, boxShadow } from 'src/tokens'

type HeaderWrapperProps = {
  showProgressBar: boolean
}

const HeaderWrapper = styled.div`
  position: ${(props: HeaderWrapperProps) => (props.showProgressBar ? 'relative' : 'sticky')};
  top: 0px;
  left: 0px;
  background-color: ${colors.base.white};
  z-index: 101;
  font-size: ${space.s4};
  width: 100%;
  display: flex;
  box-shadow: ${(props: HeaderWrapperProps) =>
    props.showProgressBar ? 'inherit' : `${boxShadow.shadow}`};
  flex-direction: column;
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

type HeaderProps = {
  showProgressBar: boolean
}

const Header: React.FunctionComponent<HeaderProps> = ({ showProgressBar }) => {
  return (
    <HeaderWrapper showProgressBar={showProgressBar}>
      <Container>
        <Title>{'{ Tomas Gil }'}</Title>
      </Container>
    </HeaderWrapper>
  )
}

export default Header
